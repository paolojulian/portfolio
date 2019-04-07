const router = require('./router');
const URL = require('../../APIRoutes');
const multer = require('multer');
const fs = require('fs');
const aws = require('../aws')
const path = require('path');
const sharp = require('sharp')

const MAX_SIZE = 10000000;
const DESTINATIONS = {
    audio: 'tmp/uploads/audio',
    image: 'tmp/uploads/img'
}
const ALLOWED_FILETYPES = {
    audio: ['audio/mpeg', 'audio/mp3', 'audio/mp4', 'audio/vnd.wav'],
    img: ['image/jpeg', 'image/png', 'image/gif']
}

const checkMimeType = (allowedFiles, mimetype, callback) => {
    //eslint-disable-next-line
    if ( ! allowedFiles.includes(mimetype)) {
        const error = new Error("Wrong file type");
        error.code = "LIMIT_FILE_TYPES";
        return callback(error, false);
    }
    return callback(null, true);
}
/**
 * ONLY ALLOW VALID TYPES
 */
const imageFileFilter = (req, file, callback) => {
    return checkMimeType(
        ALLOWED_FILETYPES.img,
        file.mimetype,
        callback
    );
}
const audioFileFilter = (req, file, callback) => {
    return checkMimeType(
        ALLOWED_FILETYPES.audio,
        file.mimetype,
        callback
    );
}

const filename = (req, file, cb) => {
    // Remove the excess extensions from the file
    const baseName = path.basename(file.originalname);
    const extentionName = path.extname(file.originalname);
    // ex. Foo-14213203213211.png
    const fileName = `${baseName}-${Date.now()}${extentionName}`;
    cb(null, fileName);
}

/**
 * DESTINATION OF UPLOADED FILES
 */

const imageStorage = multer.diskStorage({
    destination: DESTINATIONS.image,
    filename: filename
});

const audioStorage = multer.diskStorage({
    destination: DESTINATIONS.audio,
    filename: filename
});

/**
 * CONFIGURATIONS OF UPLOAD
 */

const imageUpload = multer({
    dest: DESTINATIONS.image,
    storage: imageStorage,
    fileFilter: imageFileFilter,
    limits: {
        fileSize: MAX_SIZE
    }
})
const audioUpload = multer({
    dest: DESTINATIONS.audio,
    storage: audioStorage,
    fileFilter: audioFileFilter,
    limits: {
        fileSize: MAX_SIZE
    }
})

router.post(URL.uploads.audio, audioUpload.single('file'), async (req, res) => {
    // AMAZON S3 bucket
    const s3 = new aws.S3({
        Bucket: "chefpipz-resource-portfolio"
    });
    const now = Date.now();

    try {
        const data = await fs.readFileSync(req.file.path);
        const s3params = {
            Bucket: "chefpipz-resource-portfolio",
            Key: `${req.body.name}-${now}${path.extname(req.file.originalname)}`,
            Body: data,
            ACL: 'public-read'
        }
        // const s3res = await s3.upload(s3params).promise();
        s3.createBucket(err => {
            console.log(err);
            if (err) throw err;
            s3.upload(s3params, (err, data) => {
                console.log(data);
                if (err) throw err;

                console.log(data);
            })
        })
        //eslint-disable-next-line
        console.log(s3res);
        const audioPath = s3res.Location
        // Remove from tmp_uploads
        fs.unlink(req.file.path, () => {
            return res.JSONsuccess({ audioPath });
        })
    } catch (err) {
        fs.unlink(req.file.path, () => {
            return res.JSONerror({ err });
        })
    }
});

router.post(URL.uploads.image, imageUpload.single('file'), async (req, res) => {
    // AMAZON S3 bucket
    const s3 = new aws.S3();
    const now = Date.now();

    try {
        const bucketName = "chefpipz-resource-portfolio";
        const imageName = `${req.body.name}-${now}${path.extname(req.file.originalname)}`;
        // Resize the image and put in buffer
        const buffer = await sharp(req.file.path)
            .resize(300, 210)
            .toBuffer();

        const s3res = await s3.upload({
            Bucket: bucketName,
            Key: imageName,
            Body: buffer,
            ACL: 'public-read'
        }).promise();

        // Remove from tmp_uploads
        fs.unlink(req.file.path, () => {
            return res.JSONsuccess({
                imagePath: s3res.Location
            });
        })
    } catch (err) {
        fs.unlink(req.file.path, () => {
            return res.JSONerror({ err });
        })
    }
});

module.exports = router;

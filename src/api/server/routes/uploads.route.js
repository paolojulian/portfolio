const router = require('./router');
const URL = require('../../APIRoutes');
const multer = require('multer');
const fs = require('fs');
const aws = require('../aws')
const path = require('path');
const sharp = require('sharp')

const MAX_SIZE = 1000000;
const DESTINATIONS = {
    audio: 'tmp/uploads/audio',
    image: 'tmp/uploads/img'
}
const ALLOWED_FILETYPES = {
    audio: ['audio/mpeg', 'audio/mp4', 'audio/vnd.wav'],
    img: ['image/jpeg', 'image/png', 'image/gif']
}

const checkMimeType = (allowedFiles, mimetype, callback) => {
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
        file.mimetype, callback
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

var audioStorage = multer.diskStorage({
        destination: DESTINATIONS.audio,
        filename
});

var imageStorage = multer.diskStorage({
        destination: DESTINATIONS.image,
        filename
});

const audioUpload = multer({
    dest: DESTINATIONS.audio,
    audioStorage,
    fileFilter: audioFileFilter,
    limits: {
        fileSize: MAX_SIZE
    }
})

const imageUpload = multer({
    dest: DESTINATIONS.image,
    imageStorage,
    fileFilter: imageFileFilter,
    limits: {
        fileSize: MAX_SIZE
    }
})

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
        return res.JSONerror({ err });
    }
});

router.post(URL.uploads.audio, audioUpload.single('file'), async (req, res) => {
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
            ACL: 'public-read' // to enable public viewing
        }).promise();

        // Remove from tmp_uploads
        fs.unlink(req.file.path, () => {
            return res.JSONsuccess({
                imagePath: s3res.Location
            });
        })
    } catch (err) {
        return res.JSONerror({ err });
    }
});

module.exports = router;

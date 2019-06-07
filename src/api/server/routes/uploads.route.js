const router = require('./router');
const URL = require('../../APIRoutes');
const multer = require('multer');
const multerS3 = require('multer-s3')
const fs = require('fs');
const s3 = require('../aws')
const path = require('path');

const config = require('../hashed.config.json')
const imageBucket = `${config.aws.bucket}/images`

const MAX_SIZE = {
    audio: 20000000, // 20 mb
    image: 10000000 // 10 mb
}
const DESTINATIONS = {
    audio: 'tmp/uploads/audio',
    image: 'tmp/uploads/img'
}
const ALLOWED_FILETYPES = {
    audio: ['audio/mpeg', 'audio/mp3', 'audio/mp4', 'audio/vnd.wav', 'audio/x-m4a'],
    image: ['image/jpeg', 'image/png', 'image/gif']
}

const checkMimeType = (allowedFiles, mimetype, callback) => {
    //eslint-disable-next-line
    console.log(mimetype);
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
        ALLOWED_FILETYPES.image,
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
    // const baseName = path.basename(file.originalname);
    const baseName = file.originalname.split('.')[0];
    const extentionName = path.extname(file.originalname);
    // ex. Foo-14213203213211.png
    const fileName = `${baseName}-${Date.now()}${extentionName}`;
    cb(null, fileName);
}

/**
 * DESTINATION OF UPLOADED FILES
 */


const audioStorage = multer.diskStorage({
    destination: DESTINATIONS.audio,
    filename: filename
});

/**
 * CONFIGURATIONS OF UPLOAD
 */
const imageStorage = multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: imageBucket,
    metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
    },
    key: filename // The filename to be saved
});
const imageUpload = multer({
    storage: imageStorage,
    fileFilter: imageFileFilter,
    limits: {
        fileSize: MAX_SIZE.image
    }
})
const audioUpload = multer({
    storage: audioStorage,
    fileFilter: audioFileFilter,
    limits: {
        fileSize: MAX_SIZE.audio
    }
})


const uploadFile = (buffer, name, mime) => {
    const s3params = {
        Bucket: "chefpipz",
        Body: buffer,
        Key: name,
        ContentType: mime,
        ACL: 'public-read'
    }
    return s3.upload(s3params).promise();
}

// dropzone/audio
router.post(URL.uploads.audio, audioUpload.single('file'), async (req, res) => {
    const now = Date.now();

    try {
        const buffer = fs.readFileSync(req.file.path);
        const name = `${req.body.name}-${now}${path.extname(req.file.originalname)}`;
        const mimetype = req.file.mimetype;

        const s3response = await uploadFile(buffer, name, mimetype);
        const audioPath = s3response.Location;

        fs.unlink(req.file.path, () => {
            return res.JSONsuccess({ audioPath });
        })
    } catch (err) {
        // eslint-disable-next-line
        console.log(err)
        fs.unlink(req.file.path, () => {
            return res.JSONerror({ err });
        })
    }
});

// dropzone/image
router.post(URL.uploads.image, imageUpload.single('file'), (req, res) => {
    try {
        const imagePath = req.file.location
        return res.JSONsuccess({ imagePath })
    } catch (err) {
        // eslint-disable-next-line
        console.log(err)
        return res.JSONerror({ err });
    }
});

// dropzone/image
router.delete(URL.uploads.image, (req, res) => {
    const item = req.body
    const Bucket = imageBucket
    const Key = item.key
    const params = { Bucket, Key }
    s3.deleteObject(params, (err, data) => {
        if (err) {
            return res.JSONerror({ err })
        }
        return res.JSONdeleted({ data })
    })
})

module.exports = router;

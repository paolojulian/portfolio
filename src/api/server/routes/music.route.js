const URL = require('../../APIRoutes')
const router = require('./router')
const MusicModel = require('../models/music.model.js')
const resolveSrc = require('../../../../aliases.config')
let multer = require('multer');

let musicPath = resolveSrc(`/src/assets/audio`)
let storage = multer.diskStorage({
    destination: musicPath,
    filename: function (req, file, cb) {
        let filename = file.originalname.split('.').slice(0, -1).join('')
        cb(null, filename + '-' + Date.now() + '.mp3')
    }
})
let upload = multer({ storage })

/**
 * /music
 * query
 *  -sortBy
 * 
*/
/**
 * /music/list
 */
router.get(URL.music.list, (req, res) => {
    req.getConnection((error, db) => {
        // let db = req.db
        let music = new MusicModel.Music(db)
        music.getMusicList()
            .then(response => res.JSONsuccess(response))
            .catch(err => {
                // eslint-disable-next-line
                console.log(err)
                return res.JSONerror()
            })
    })
})

// music/add
router.post(URL.music.add, upload.single('file'), (req, res) => {
    req.getConnection((error, db) => {
        if (error) return res.status(505);

        var music = new MusicModel.Music(db)
        music.setMusic(
            req.body.name,
            req.body.artist,
            req.file
        )

        if ( ! music.validateEmpty()) {
            return res.status(422).json('Incomplete Parameters')
        }


        music.addMusic()
            .then(() => res.JSONsuccess())
            .catch(() => res.JSONerror())
    })
})

// music/edit
router.patch(URL.music.edit, (req, res) => {
    req.getConnection((error, db) => {
        if (error) return res.JSONerror()

        const musicModel = new MusicModel.Music(db)
        musicModel.setID(req.body.musicID)

        musicModel
            .updateMusic(req.body.data)
            .then(() => res.JSONsuccess())
            .catch(err => {
                // eslint-disable-next-line
                console.trace(err)
                res.JSONerror()
            })
    })
})


// music/delete
router.post(URL.music.delete, (req, res) => {
    req.getConnection((error, db) => {
        if (error) return res.JSONerror()

        const musicModel = new MusicModel.Music(db)
        musicModel.setID(req.body.musicID)

        musicModel
            .deleteMusic()
            .then(() => res.JSONsuccess())
            .catch(err => {
                // eslint-disable-next-line
                console.trace(err)
                res.JSONerror()
            })
    })
})

module.exports = router;

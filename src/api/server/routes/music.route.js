const URL = require('../../APIRoutes')
const router = require('./router')
const JsonResponse = require('./json')
const MusicModel = require('../models/music.model.js')

let multer = require('multer');
let musicPath = 'src/assets/audio'
let storage = multer.diskStorage({
    destination: musicPath,
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + '.mp3')
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

        let query = "SELECT * FROM music_music"
        db.query(query, (error, musicList) => {
            if (error) {
                return res.status(503)
            }
            return res.status(200).json(new JsonResponse(true, musicList))
        })
    })
})

// music/add
router.post(URL.music.add, upload.single('file'), (req, res) => {
    req.getConnection((error, db) => {
        if (error) return res.status(505);

        var music = new MusicModel.Music()
        music.setMusic(
            req.body.name,
            req.body.artist,
            req.file
        )

        if ( ! music.validateEmpty()) {
            return res.status(422).json('Incomplete Parameters')
        }


        music.addMusic(db)
            .then(() => {
                res.status(200).json(new JsonResponse(true))
            })
            .catch(() => res.status(502).json(new JsonResponse(false)))
    })
})

// music/delete
router.post(URL.music.delete, (req, res) => {
    req.getConnection((error, db) => {
        if (error) return res.status(500).json(new JsonResponse(false));

        const musicModel = new MusicModel.Music()
        musicModel.setID(req.body.musicID)

        musicModel
            .deleteMusic(db)
            .then(() => res.status(200).json(new JsonResponse(true)))
            .catch(() => res.status(500).json(new JsonResponse(false)))
    })
})

module.exports = router;

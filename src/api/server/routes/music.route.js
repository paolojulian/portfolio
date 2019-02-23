const URL = require('../../APIRoutes')
const router = require('./router')
const JsonResponse = require('./json')

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

module.exports = router

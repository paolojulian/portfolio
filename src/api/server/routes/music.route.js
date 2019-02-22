const URL = require('../../APIRoutes')
const router = require('./router')

/** MODELS */
const Music = require('../models/music.model')

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
    Music.getMusicList()
        .then((musicList) => {
            res.status(200).json(musicList)
        })
        .catch((error) => {
            console.error(error)
        })
})

module.exports = router

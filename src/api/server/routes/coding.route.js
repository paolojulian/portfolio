const URL = require('../../APIRoutes')
const router = require('./router')

/** MODELS */
const Coding = require('../models/coding.model')

router.get('/api/coding/create-table', (req, res) => {
    Coding.createTables()
        .then(() => {
            res.status(200).json({
                message: 'Success Creation'
            })
        })
        .catch(() => res.status(503))
})
/**
 * /music/list
 */
router.get(URL.music.list, (req, res) => {
    Coding.getMusicList()
        .then((musicList) => {
            res.status(200).json(musicList)
        })
        .catch(() => res.status(503))
})

module.exports = router

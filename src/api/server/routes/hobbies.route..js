const URL = require('../../APIRoutes')
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST'
    })
})

/** MUSIC */
router.get(URL.music.main, (req, res, next) => {
    res.status(200).json({
        message: 'GET music'
    })
})

router.get(URL.music.list, (req, res, next) => {
    res.status(200).json({
        message: 'GET music list'
    })
})
/** END MUSIC */

module.exports = router

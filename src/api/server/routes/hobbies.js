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

/** COOKING */
router.get(URL.cooking.main, (req, res, next) => {
    res.status(200).json({
        message: 'GET cooking'
    })
})

router.get(URL.cooking.recipeList, (req, res, next) => {
    res.status(200).json({
        message: 'GET cooking list'
    })
})
router.get(URL.cooking.recipe, (req, res, next) => {
    let recipeID = req.params.recipeID
    res.status(200).json({
        message: 'recipeID',
        recipeID
    })
})
// router.post(URL.cooking.recipe, (req, res, next) => {
//     res.status(200).json({
//         message: 'Added Recipe',
//         recipeID
//     })
// })
router.patch(URL.cooking.recipe, (req, res, next) => {
    let recipeID = req.params.recipeID
    res.status(200).json({
        message: 'Updated Recipe! ' + recipeID
    })
})
/** END COOKING */

module.exports = router

const URL = require('../../APIRoutes')
const router = require('./router')

/** MODELS */
const Cooking = require('../models/cooking.model')

/**
 * /cooking/recipe
 * query
 *  -sortBy
 * 
*/
router.get(URL.cooking.recipeList, (req, res) => {
    Cooking.getRecipeList(req.query.sortBy)
        .then((recipeList) => {
            res.status(200).json(recipeList)
        })
        .catch((error) => {
            console.error(error)
        })
})

/** /cooking */
router.get(URL.cooking.main, (req, res) => {
    res.status(200).json({
        message: 'GET cooking'
    })
})

/** /cooking/recipe/:recipeID */
router.get(URL.cooking.recipe, (req, res) => {
    let recipeID = req.params.recipeID
    res.status(200).json({
        message: 'recipeID',
        recipeID
    })
})

module.exports = router
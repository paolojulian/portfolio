const URL = require('../../APIRoutes')
const router = require('./router')
const JsonResponse = require('./json')

const foodCategories = {
    asian: 1,
    european: 2,
    american: 3,
    indian: 4
}
/**
 * /cooking/recipe
 * query
 *  -sortBy
 * 
*/
router.get(URL.cooking.recipeList, (req, res) => {
    var query = 'SELECT * FROM hobbies_recipe'

    let sortBy = req.query.sortBy || 'favorite'
    switch (sortBy) {
        case 'asian':
            query += ` WHERE food_category_id = ${foodCategories.asian}`
            break;
        case 'european':
            query += ` WHERE food_category_id = ${foodCategories.european}`
            break;
        case 'american':
            query += ` WHERE food_category_id = ${foodCategories.american}`
            break;
        case 'indian':
            query += ` WHERE food_category_id = ${foodCategories.indian}`
            break;
        case 'favorite':
            query += " WHERE favorite = 1"
            break;
        default:
            query += " WHERE favorite = 1"
            break;
    }
    let db = req.db
    db.query(query, (error, recipeList) => {
        if (error) {
            return res.status(503)
        }

        return res.status(200).json(new JsonResponse(true, recipeList))
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
    res.status(200).json(new JsonResponse(true, recipeID))
})

module.exports = router
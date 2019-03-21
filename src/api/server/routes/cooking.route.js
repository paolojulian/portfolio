const URL = require('../../APIRoutes')
const router = require('./router')
const JsonResponse = require('./json')
const CookingModel = require('../models/cooking.model')
const multer = require('multer');
const resolveSrc = require('../../../../aliases.config')

const foodCategories = {
    asian: 1,
    european: 2,
    american: 3,
    indian: 4
}

/**
 * /cooking/create/procedure
 */
router.get(URL.cooking.create.procedure, (req, res) => {
    req.getConnection((err, db) => {
        if (err) return res.status(500).json('No Connection');

        let ProcedureModel = new CookingModel.Procedure(db)
        ProcedureModel.createTable()
            .then(() => res.status(200).json('Successfully created table hobbies_procedure'))
            .catch(err => res.status(500).json(err))
    })
})
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
            break;
    }

    req.getConnection((connectionErr, db) => {
        db.query(query, (error, recipeList) => {
            if (error) {
                return res.status(503)
            }

            return res.status(200).json(new JsonResponse(true, recipeList))
        })
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

/**
 * ADD RECIPE
 * @param { String } recipeName - Name of the recipe
 * @param { Number } favorite - 0 : not, 1 : favorite
 * @param { Number } durationFrom - Minimum finish in Minutes
 * @param { Number } durationTo - Max finish in Minutes
 * @param { Array } ingredients - Ingredients used for the recipe
 * @param { Array } procedures - Procedures for cooking the recipe
 * @param { String } foodCategoryID - food category
 * 
 * @return { json }
 */

let musicPath = resolveSrc(`/src/assets/img/cooking`)
let storage = multer.diskStorage({
    destination: musicPath,
    filename: function (req, file, cb) {
        let filename = file.originalname.split('.').slice(0, -1).join('')
        cb(null, filename + '-' + Date.now() + '.png')
    }
})
let upload = multer({ storage })

router.post(URL.cooking.addRecipe, upload.single('file'), (req, res) => {
    req.getConnection((connectionErr, db) => {
        if (connectionErr) return res.status(500).json('No Connection');

        let procedures = JSON.parse(req.body.procedures)
        let ingredients = JSON.parse(req.body.ingredients)
        var recipe = new CookingModel.Recipe(
            db,
            req.body.name,
            req.body.favorite,
            req.body.durationFrom,
            req.body.durationTo,
            req.body.foodCategoryID,
            req.file
        )
        if ( ! recipe.validateEmpty()) {
            return res.status(422).json('Incomplete Parameters')
        }
        if (procedures.length === 0) {
            return res.status(422).json('No Procedures')
        }
        if (ingredients.length === 0) {
            return res.status(422).json('No Ingredients')
        }

        recipe.addRecipe(procedures, ingredients)
            .then(() => res.status(200).json(new JsonResponse(true)))
            .catch(err => res.status(500).json(err))
    })
});

module.exports = router;
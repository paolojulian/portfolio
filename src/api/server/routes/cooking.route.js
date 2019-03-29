const URL = require('../../APIRoutes')
const router = require('./router')
const CookingModel = require('../models/cooking.model')
const multer = require('multer');
const resolveSrc = require('../../../../aliases.config')

const foodCategories = {
    hors: 1,
    appetizer: 2,
    salad: 3,
    main: 4,
    dessert: 5
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
        case 'hors':
            query += ` WHERE food_category_id = ${foodCategories.hors}`
            break;
        case 'appetizer':
            query += ` WHERE food_category_id = ${foodCategories.appetizer}`
            break;
        case 'salad':
            query += ` WHERE food_category_id = ${foodCategories.salad}`
            break;
        case 'mainCourse':
            query += ` WHERE food_category_id = ${foodCategories.main}`
            break;
        case 'dessert':
            query += ` WHERE food_category_id = ${foodCategories.dessert}`
            break;
        case 'favorite':
            query += " WHERE favorite = 1"
            break;
        default:
            break;
    }

    req.getConnection((connectionErr, db) => {
        db.query(query, (error, recipeList) => {
            if (error) return res.JSONerror()

            return res.JSONsuccess(recipeList)
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
    req.getConnection((err, db) => {
        if (err) return res.JSONerror()

        let recipe = new CookingModel.Recipe(db)
        recipe.id = req.params.recipeID
        recipe.getInfo()
            .then(response => res.JSONsuccess(response))
            .catch(() => res.JSONerror())
    })
})

/** /cooking/recipe/edit */
router.patch(URL.cooking.edit, (req, res) => {
    req.getConnection((err, db) => {
        if (err) return res.JSONerror()

        var recipe = new CookingModel.Recipe(db)
        recipe.id = req.body.id
        recipe.updateRecipeInfo({
            name: req.body.name.trim(),
            duration_from: req.body.duration_from,
            duration_to: req.body.duration_to
        }).then(() => res.JSONsuccess())
        .catch(() => res.JSONerror())

    })
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
        var recipe = new CookingModel.Recipe(db)
        recipe.setRecipe(
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
            .then(() => res.JSONcreated())
            .catch(() => res.JSONerror())
    })
});

module.exports = router;
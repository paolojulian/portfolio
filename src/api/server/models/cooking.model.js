const Model = require('./model')
class Ingredient extends Model {
    constructor (db) {
        super (db)
        this.tableName = 'hobbies_ingredient'
    }
}

class RecipeIngredient extends Model {
    constructor (db) {
        super (db)
        this.tableName = 'hobbies_recipeingredients'
    }

    getByRecipe (recipeID, fields = '*') {
        let _ingredient = new Ingredient(this.db)
        let where = { "recipe_id": recipeID }
        let join = {
            type: 'left',
            table: `${_ingredient.tableName}`,
            on: `ingredient_id = ${_ingredient.tableName}.id`
        }
        let sort = {
            column: 'order',
            order: 'ASC'
        }
        let condition = {
            table: this.tableName,
            fields,
            where,
            join,
            sort
        }

        return this.getQuery(condition)
    }

    addRecipeIngredients (recipeID, ingredients) {
        const buildRecipeIngredients = () => ingredients.map((ingredient, index) => {
            return [
                ingredient.quantity,
                ingredient.description,
                index + 1,
                ingredient.id,
                recipeID
            ]
        })
        return this.insertBatch(
            this.tableName,
            ['quantity', 'description', 'order', 'ingredient_id', 'recipe_id'],
            buildRecipeIngredients()
        ).catch(err => { throw err })
    }
}

class Procedure extends Model {
    constructor (db) {
        super (db)

        this.tableName = 'hobbies_procedure'
    }

    createTable () {
        let sql = `CREATE TABLE \`${this.tableName}\` (
            \`id\` int(11) NOT NULL AUTO_INCREMENT,
            \`description\` longtext NOT NULL,
            \`order\` int(10) unsigned NOT NULL,
            \`dateCreated\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            \`recipe_id\` int(11) NOT NULL,
            PRIMARY KEY (\`id\`),
            UNIQUE KEY \`hobbies_procedure_recipe_id_order_5cbc87a6_uniq\` (\`recipe_id\`,\`order\`),
            CONSTRAINT \`hobbies_procedure_recipe_id_beeb89a5_fk_hobbies_recipe_id\` FOREIGN KEY (\`recipe_id\`) REFERENCES \`hobbies_recipe\` (\`id\`)
        ) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
        `

        return this.query(sql)
    }

    addProcedures (recipeID, procedures) {
        const buildProcedures = () => procedures.map((recipeName, index) => {
            return [
                recipeName, // description
                index + 1, // order
                recipeID
            ]
        })
        return this.insertBatch(
            this.tableName,
            ['description', 'order', 'recipe_id'],
            buildProcedures()
        )
    }

    getByRecipe (recipeID, fields = '*') {
        let where = { "recipe_id": recipeID }
        let sort = {
            column: 'order',
            order: 'ASC'
        }
        let condition = {
            table: this.tableName,
            fields,
            where,
            sort
        }

        return this.getQuery(condition)
    }
}
class Recipe extends Model {
    constructor (db) {
        super (db)

        this.table = {}
        this.tableName = 'hobbies_recipe'

    }

    setRecipe (name, favorite, duration_from, duration_to, food_category_id, file) {
        this.form = {}
        this.form.name = name ? name.trim() : ''
        this.form.favorite = favorite || 0
        this.form.duration_from = duration_from || 5
        this.form.duration_to = duration_to || 5
        this.form.food_category_id = food_category_id || null
        this.file = file || null
    }

    getInfo () {
        let _procedure = new Procedure(this.db)
        let _recipeIngredient = new RecipeIngredient(this.db)
        return new Promise(async(resolve, reject) => {
            let fields = 'quantity, description, ingredient_id, name'
            const recipeIngredients = _recipeIngredient.getByRecipe(this.id, fields)
            fields = 'description'
            const procedures = _procedure.getByRecipe(this.id, fields)
            await Promise.all([recipeIngredients, procedures])
                .then(response => resolve({ recipeIngredients: response[0], procedures: response[1] }))
                .catch(err => reject(err))
        })
    }

    /**
     * CHECK EMPTY VALUES
     *  it should be already checked on the front end
     * only additional validation before entering database
     */
    validateEmpty () {
        if (this.form.name.length <= 0) return false

        return true
    }

    /**
     * Handles submit and adding of recipe
     */
    addRecipe (procedures, ingredients) {
        // Insert to recipe
        return new Promise((resolve, reject) => {
            let _procedure = new Procedure(this.db)
            let _recipeIngredient = new RecipeIngredient(this.db)
            let recipe = {
                name: this.form.name,
                favorite: this.form.favorite,
                duration_from: this.form.duration_from,
                duration_to: this.form.duration_to,
                food_category_id: this.form.food_category_id,
                image_path: this.file.filename
            }

            this.beginTransaction(async err => {
                try {
                    if (err) return reject(err);

                    // Insert recipe to hobbies_recipe
                    await this.insert(this.tableName, recipe).catch(err => { throw err })
                    // get inserted ID to be used as foreign key for procedures and recipeingredients
                    const recipeID = await this.insertID().catch(err => { throw err })

                    const promises = [
                        _procedure.addProcedures(recipeID, procedures),
                        _recipeIngredient.addRecipeIngredients(recipeID, ingredients)
                    ]
                    await Promise.all(promises).catch(err => { throw err })
                    await this.commitTransaction()
                    return resolve()
                } catch (err) {
                    // eslint-disable-next-line
                    console.log(err)
                    
                    await this.rollbackTransaction()
                    return reject(err)
                }
            })
        })
    }
    updateRecipeInfo (form) {
        return this.transaction(async() => {
            let promises = [
                this.update(this.tableName, this.id, form)
            ]

            await Promise.all(promises).catch(err => { throw err })
        })
    }
}

module.exports = {
    Recipe,
    Procedure,
    Ingredient,
    RecipeIngredient
}
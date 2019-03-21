const Model = require('./model')
class Procedures extends Model {
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
}
class Recipe extends Model {
    constructor (db, name, favorite, duration_from, duration_to, ingredients, procedures, food_category_id, file) {
        super (db)

        this.form = {}
        this.form.name = name.trim()
        this.form.favorite = favorite
        this.form.duration_from = duration_from
        this.form.duration_to = duration_to
        this.form.ingredients = ingredients
        this.form.procedures = procedures
        this.form.food_category_id = food_category_id

        this.file = file

        this.table = {}
        this.table.recipe = 'hobbies_recipe'
        this.table.procedure = 'hobbies_procedure'
    }

    createTable (table) {
        let sql = ''
        let tables = {
            procedure: 'hobbies_procedure'
        }

        switch (table) {
            case tables[table]:
                sql = `CREATE TABLE \`${tables[table]}\` (
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
                break;
            default:
                return console.log('Invalid table')
        }

        console.log(sql)

        return this.query(sql)
    }

    /**
     * CHECK EMPTY VALUES
     *  it should be already checked on the front end
     * only additional validation before entering database
     */
    validateEmpty () {
        if (this.form.name.length <= 0) return false
        if (this.form.ingredients.length <= 0) return false
        if (this.form.procedures.length <= 0) return false

        return true
    }

    /**
     * Handles submit and adding of recipe
     */
    addRecipe () {
        // Insert to recipe
        return new Promise((resolve, reject) => {
            let recipe = {
                name: this.form.name,
                favorite: this.form.favorite,
                duration_from: this.form.duration_from,
                duration_to: this.form.duration_to,
                food_category_id: this.form.food_category_id,
                image_path: this.file.filename
            }

            const buildProcedures = recipeID => {
                return this.form.procedures.map((recipeName, index) => {
                    return [
                        recipeName, // description
                        index + 1, // order
                        recipeID
                    ]
                })
            }
            this.beginTransaction(async err => {
                try {
                    if (err) return reject(err);

                    await this.insert(this.table.recipe, recipe).catch(err => { throw err })
                    const recipeID = await this.insertID().catch(err => { throw err })

                    const promises = [
                        this.insertBatch(
                            this.table.procedure,
                            ['description', 'order', 'recipe_id'],
                            buildProcedures(recipeID)
                        )
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
}

module.exports = {
    Recipe,
    Procedures
}
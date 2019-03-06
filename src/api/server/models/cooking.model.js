const Model = require('./model')
// class Procedures extends Model {
//     addProcedures() {

//     }
// }
class Recipe extends Model {
    constructor (name, favorite, duration_from, duration_to, ingredients, procedures, food_category_id) {
        super ()
        this.form = {}
        this.form.name = name.trim()
        this.form.favorite = favorite
        this.form.duration_from = duration_from
        this.form.duration_to = duration_to
        this.form.ingredients = ingredients
        this.form.procedures = procedures
        this.form.food_category_id = food_category_id

        this.table = {}
        this.table.recipe = 'hobbies_recipe'
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
     * @param { Database } db - database connection
     */
    addRecipe (db) {
        let recipe = {
            name: this.form.name,
            favorite: this.form.favorite,
            duration_from: this.form.duration_from,
            duration_to: this.form.duration_to,
            food_category_id: this.form.food_category_id
        }
        // Insert to recipe
        return super.insert(this.table.recipe, recipe, db)
    }
}

module.exports = {
    Recipe
}
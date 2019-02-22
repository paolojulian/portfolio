const Model = require('./model')

class CookingModel extends Model {
    constructor () {
        super()
        this.foodCategories = {
            asian: 1,
            european: 2,
            american: 3,
            indian: 4
        }
    }

    getRecipeList (sortBy) {
        var query = 'SELECT * FROM hobbies_recipe'

        switch (sortBy) {
            case 'asian':
                query += ` WHERE food_category_id = ${this.foodCategories.asian}`
                break;
            case 'european':
                query += ` WHERE food_category_id = ${this.foodCategories.european}`
                break;
            case 'american':
                query += ` WHERE food_category_id = ${this.foodCategories.american}`
                break;
            case 'indian':
                query += ` WHERE food_category_id = ${this.foodCategories.indian}`
                break;
            case 'favorite':
                query += " WHERE favorite = 1"
                break;
            default:
                break;
        }
        console.log(query)
        return super.query(query)
    }
}

module.exports = new CookingModel()
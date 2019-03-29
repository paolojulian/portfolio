import { MyAPI } from '@/api/API'
const URL = require('./APIRoutes')

export class APIHobby extends MyAPI {
    addRecipe (form) {
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return super.xhrPost(
            URL.cooking.addRecipe,
            form,
            config
        )
    }

    getRecipes (recipeId, sortBy = 'favorite') {
        let url = recipeId
            ? `${URL.cooking.recipeList}/${recipeId}`
            : URL.cooking.recipeList

        let params = {
            sortBy: sortBy
        }
        return super.xhrGet(url, params)
    }

    getIngredients () {
        let url = URL.cooking.ingredients
        return super.xhrGet(url)
    }

    getFoodCategories () {
        let url = URL.cooking.foodCategories
        return super.xhrGet(url)
    }

    addMusic (form) {
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return super.xhrPost(
            URL.music.add,
            form,
            config
        )
    }

    getMusicList () {
        let url = URL.music.list

        return super.xhrGet(url)
    }

    getCodingProjects () {
        return super.xhrGetAll([
            URL.coding.companyProjects,
            URL.coding.personalProjects
        ])
    }

    getCodingSkills () {
        return super.xhrGetAll([
            URL.coding.languages,
            URL.coding.frameworks
        ])
    }

    updateMusic (musicID, data) {
        return super.xhrPatch(URL.music.edit, { musicID, data })
    }

    deleteMusic (musicID) {
        return super.xhrPost(URL.music.delete, { musicID })
    }

    updateRecipeInfo (payload) {
        return this.xhrPatch(URL.cooking.edit, payload)
    }
}

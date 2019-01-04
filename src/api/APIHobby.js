import { MyAPI } from '@/api/API'
import { API_URL } from '@/helpers/constants'

const myApi = new MyAPI()

// const hobbyApi = API_URL + '/hobby'
const APICooking = API_URL + '/cooking'
const APIRecipe = `${APICooking}/recipe`
const APIMusic = API_URL + '/music'
const APIMusicList = `${APIMusic}/list`
// const recipeIngredientsAPI = `${cookingAPI}/recipe-ingredients`

export class APIHobby {
    getRecipes (recipeId, sortBy = 'favorite') {
        let url = recipeId
            ? `${APIRecipe}/${recipeId}`
            : APIRecipe

        let params = {
            sortBy: sortBy
        }
        return myApi.xhrGet(url, params)
    }

    getMusicList () {
        let url = APIMusicList

        return myApi.xhrGet(url)
    }
}

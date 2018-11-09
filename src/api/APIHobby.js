import axios from 'axios'
import { API_URL } from '@/helpers/constants'
import { APIValidate } from '@/api/APIValidate'

// const hobbyApi = API_URL + '/hobby'
const APICooking = API_URL + '/cooking'
const APIRecipe = `${APICooking}/recipe`
// const recipeIngredientsAPI = `${cookingAPI}/recipe-ingredients`

export class APIHobby {
    getRecipes (recipeId) {
        return new Promise((resolve, reject) => {
            let url = recipeId
                ? `${APIRecipe}/${recipeId}`
                : APIRecipe

            axios.get(url)
                .then(response => {
                    APIValidate({ resolve, reject }, response)
                })
                .catch(message => {
                    console.log(message)
                    reject(message)
                })
        })
    }
}

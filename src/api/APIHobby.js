import { MyAPI } from '@/api/API'
import { API_URL } from '@/helpers/constants'

// const hobbyApi = API_URL + '/hobby'
// const APICooking = API_URL + '/cooking'
// const APIRecipe = `${APICooking}/recipe`

// const APIMusic = API_URL + '/music'
// const APIMusicList = `${APIMusic}/list`

const URL = {
    music: {
        main: API_URL + '/music',
        list: API_URL + '/music/list'
    },
    cooking: {
        main: API_URL + '/cooking',
        recipeList: API_URL + '/cooking/recipe'
    },
    coding: {
        languages: 'http://localhost:3004/coding/skills/languages',
        frameworks: 'http://localhost:3004/coding/skills/frameworks',
        companyProjects: 'http://localhost:3004/company_projects',
        personalProjects: 'http://localhost:3004/personal_projects'
    }
}
// const recipeIngredientsAPI = `${cookingAPI}/recipe-ingredients`

export class APIHobby extends MyAPI {
    getRecipes (recipeId, sortBy = 'favorite') {
        let url = recipeId
            ? `${URL.cooking.recipeList}/${recipeId}`
            : URL.cooking.recipeList

        let params = {
            sortBy: sortBy
        }
        return super.xhrGet(url, params)
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
}

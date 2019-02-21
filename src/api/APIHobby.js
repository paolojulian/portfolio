import { MyAPI } from '@/api/API'
import { API_URL, API_FAKE } from '@/helpers/constants'
const URL = {
    sports: {
        hiking: {
            gallery: `${API_FAKE}/sports/hiking/gallery`
        }
    },
    music: {
        main: API_URL + '/music',
        list: API_URL + '/music/list'
    },
    cooking: {
        main: API_URL + '/cooking',
        recipeList: API_URL + '/cooking/recipe'
    },
    coding: {
        languages: `${API_FAKE}/coding/skills/languages`,
        frameworks: `${API_FAKE}/coding/skills/frameworks`,
        companyProjects: `${API_FAKE}/company_projects`,
        personalProjects: `${API_FAKE}/personal_projects`
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

import { $pageLoader } from '@/helpers/constants'
import { APIHobby } from '@/api/APIHobby'
const apiHobby = new APIHobby()

const cookingList = [
    'Indian',
    'Asian',
    'Italian',
    'American'
]
const actions = {

    getHobbyList: ({ commit }) => {
        let cooking = new Hobby('cooking', cookingList)

        let musicList = [
            'Rock',
            'Blues',
            'Rap'
        ]
        let music = new Hobby('music', musicList)

        let sportsList = [
            'Basketball',
            'Hiking',
            'Jogging',
            'E-sports'
        ]
        let sports = new Hobby('sports', sportsList)

        let codingList = [
            'HTML',
            'CSS',
            'Javascript',
            'Java',
            'Python',
            'PHP'
        ]
        let coding = new Hobby('coding', codingList)

        commit('setHobbyCategories', cooking)
        commit('setHobbyCategories', music)
        commit('setHobbyCategories', sports)
        commit('setHobbyCategories', coding)
    },

    getHobbyCooking: ({ commit }, sortBy = 'all') => {
        commit('load')
        apiHobby.getRecipes(null, sortBy)
            .then(list => {
                commit('post')
                let hobbyList = new HobbyList('cooking', list)
                commit('setHobbyList', hobbyList)
            })
            .catch(()=> {
                commit('error')
            })
    },

    addMusic: (context, payload) => {
        return apiHobby.addMusic(payload)
    },

    getMusicList: ({ commit }) => {
        commit($pageLoader + '/pageLoading', {}, { root: true })
        apiHobby.getMusicList()
            .then(list => {
                commit($pageLoader + '/pagePost', {}, { root: true })
                let hobbyList = new HobbyList('music', list)
                commit('setHobbyList', hobbyList)
            })
            .catch(() => {
                commit($pageLoader + '/pageError', {}, { root: true })
            })
    },

    getRecipe: (context, recipeId) => {
        return apiHobby.getRecipes(recipeId)
    },

    getIngredients: () => {
        return apiHobby.getIngredients()
    },

    getFoodCategories: () => {
        return apiHobby.getFoodCategories()
    },

    addRecipe: (context, payload) => {
        return apiHobby.addRecipe(payload)
    },

    deleteRecipe: (context, { recipeID, key }) => {
        return apiHobby.deleteRecipe(recipeID, key)
    },

    updateRecipeInfo: (context, payload) => {
        return apiHobby.updateRecipeInfo(payload)
    },

    addProject: (context, form) => {
        return apiHobby.addProject(form)
    },

    getProjects: ({ commit }) => {
        commit($pageLoader + '/pageLoading', {}, { root: true })
        apiHobby.getProjects()
            .then(list => {
                commit($pageLoader + '/pagePost', {}, { root: true })
                let hobbyList = new HobbyList('coding', list)
                commit('setHobbyList', hobbyList)
            })
            .catch(() => {
                commit($pageLoader + '/pageError', {}, { root: true })
            })
    },

    deleteProject: (context, { projectID, key }) => {
        return apiHobby.deleteProject(projectID, key)
    },

    getCodingProjects: () => {
        return apiHobby.getCodingProjects()
    },

    getCodingSkills: () => {
        return apiHobby.getCodingSkills()
    },

    /**
     * FILE UPLOADS
     */

    uploadAudio: (context, audioFile) => {
        return apiHobby.uploadAudio(audioFile);
    },
    uploadImage: (context, imageFile) => {
        return apiHobby.uploadImage(imageFile);
    },
    deleteImage: (context, imageKey) => {
        return apiHobby.deleteImage(imageKey);
    }
}

/********************
 * PRIVATE HELPERS
 */
class Hobby {
    constructor (hobbyName, categories) {
        this.hobbyName = hobbyName
        this.categories = categories
    }
}
class HobbyList {
    constructor (hobbyName, list) {
        this.hobbyName = hobbyName
        this.list = list
    }
}

export default actions

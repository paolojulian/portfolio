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

    getRecipe: (context, recipeId) => {
        return apiHobby.getRecipes(recipeId)
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

    updateRecipeInfo: (context, payload) => {
        return apiHobby.updateRecipeInfo(payload)
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

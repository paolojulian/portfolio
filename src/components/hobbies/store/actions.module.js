import { APIHobby } from '@/api/APIHobby'
import { $pageLoader } from '@/helpers/constants'
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
            'DOTA'
        ]
        let sports = new Hobby('sports', sportsList)

        let codingList = [
            'HTML && CSS',
            'Javascript',
            'Jquery',
            'Vue',
            'Java',
            'PHP'
        ]
        let coding = new Hobby('coding', codingList)

        commit('setHobbyCategories', cooking)
        commit('setHobbyCategories', music)
        commit('setHobbyCategories', sports)
        commit('setHobbyCategories', coding)
    },

    getHobbyCooking: ({ commit }) => {
        commit($pageLoader + '/pageLoading', {}, { root: true })
        apiHobby.getRecipes()
            .then(list => {
                commit($pageLoader + '/pagePost', {}, { root: true })
                let hobbyList = new HobbyList('cooking', list)
                commit('setHobbyList', hobbyList)
            })
            .catch(error => {
                console.log(error)
                commit($pageLoader + '/pageError', {}, { root: true })
            })
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

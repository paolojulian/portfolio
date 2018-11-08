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
        return apiHobby.getHobby(1)
        // setTimeout(function () {
        //     let list = {
        //         indian: {
        //             chickenTikkaMasala: {
        //                 name: 'Chicken Tikka Masala'

        //             },
        //             biryani: {

        //             }
        //         },
        //         asian: {
        //             noodlesPoachedEgg: {
        //                 name: 'Noodles with Poached Egg',
        //                 ingredients: {
        //                     noodles: {
        //                         name: 'Noodles',
        //                         subIngredients: {
        //                             breadFlour: { name: 'Bread Flour' },
        //                             water: { name: 'Water' },
        //                             bakingSoda: { name: 'Baking Soda' }
        //                         },
        //                         optionals: {
        //                             egg: { name: 'Egg' }
        //                         }
        //                     },
        //                     misoBrothSimple: {
        //                         name: 'Miso Broth',
        //                         subIngredients: [
        //                             'Water',
        //                             'Miso Paste',
        //                             'Ginger Paste',
        //                             'Dry Shitake Mushroom',
        //                             'Soy Sauce'
        //                         ]
        //                     },
        //                     poachedEgg: {
        //                         name: 'Poached Egg'
        //                     },
        //                     spinach: {
        //                         name: 'Spinach'
        //                     }
        //                 },
        //                 optionals: {
        //                     ham: {
        //                         name: 'Ham'
        //                     },
        //                     shrimp: {
        //                         name: 'Shrimp'
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     let cooking = new HobbyList('cooking', list)
        //     commit('setHobbyList', cooking)
        //     resolve()
        // }, 100)
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
// class HobbyList {
//     constructor (hobbyName, list) {
//         this.hobbyName = hobbyName
//         this.list = list
//     }
// }

export default actions

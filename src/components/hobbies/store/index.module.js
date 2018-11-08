import getters from './getters.module'
import mutations from './mutations.module'
import actions from './actions.module'

import language from './language'

const state = {
    language,

    modal: {
        viewRecipe: {
            toggle: false,
            data: {}
        }
    },

    cooking: {
        header: 'Cooking',
        categories: [],
        list: []
    },
    music: {
        header: 'Music',
        categories: [],
        list: []
    },
    sports: {
        header: 'Sports',
        categories: []
    },
    coding: {
        header: 'Coding',
        categories: []
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

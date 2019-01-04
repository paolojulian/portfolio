import getters from './getters.module'
import mutations from './mutations.module'
import actions from './actions.module'

import language from './language'

import { Page } from '@/helpers/libraries'

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
        list: [],
        categories: [],
        page: new Page()
    },
    music: {
        header: 'Music',
        categories: [],
        currentPlaying: 0,
        isPlaying: false,
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

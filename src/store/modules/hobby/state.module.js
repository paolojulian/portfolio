
import language from './language'

import { PageLoader } from '@/helpers/libraries'

const state = {
    language,

    admin: {
        status: {
            success: false,
            error: false,
            msg: ''
        }
    },

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
        pageLoader: new PageLoader()
    },
    music: {
        TOGGLE_PLAYER: null,
        header: 'Music',
        categories: [],
        currentPlaying: null,
        isPlaying: false,
        list: []
    },
    sports: {
        header: 'Sports',
        categories: []
    },
    coding: {
        header: 'Coding',
        categories: [],
        list: [],
    },
    skills: {
        list: []
    }
}

export default state

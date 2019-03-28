
import language from './language'

import { PageLoader } from '@/helpers/libraries'

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
        categories: []
    }
}

export default state

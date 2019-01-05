import getters from './getters.module'
import mutations from './mutations.module'
import actions from './actions.module'

import language from './language'

const state = {
    language
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

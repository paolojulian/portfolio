export const state = {
    isLoggedIn: getSavedState('auth.token')
}

export const getters = {
    isLoggedIn: state => !!state.isLoggedIn
}

export const mutations = {
    setState: (state, token) => {
        state.isLoggedIn = token
        saveState('auth.token', token)
        setDefaultAuthHeaders(state)
    }
}

export const actions = {
    validateLogin: () => {
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve('pipz')
            }, 200)
        })
    },
    login: ({ getters, commit, dispatch }) => {
        // if has login token, validate if token is valid
        if (getters.isLoggedIn) return dispatch('validateLogin')
        // login
        return new Promise((resolve) => {
            setTimeout(function () {
                let token = 'pipz'
                commit('setState', token)
                resolve(token)
            }, 1000)
        })
    },
    logout: ({ commit }) => {
        commit('setState', null)
    }
}

/*****************
 * PRIVATE HELPERS
 */
function getSavedState (key) {
    return window.localStorage.getItem(key)
}

function saveState (key, state) {
    window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders () {
    // axios.defaults.headers.common.Authorization = state.isLoggedIn
    //     ? state.isLoggedIn
    //     : ''
}

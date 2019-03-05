import router from '@/router/index'
const authHeader = 'auth.token'
export const state = {
    isLoggedIn: getSavedState('auth.token')
}

export const getters = {
    isLoggedIn: state => !!state.isLoggedIn
}

export const mutations = {
    setState: (state, token) => {
        state.isLoggedIn = token
        saveState(authHeader, token)
        setDefaultAuthHeaders(state)
    },
    logout: (state) => {
        state.isLoggedIn = null
        removeState(authHeader)
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
    login: ({ getters, commit, dispatch }, credentials) => {
        // if has login token, validate if token is valid
        if (getters.isLoggedIn) return dispatch('validateLogin')
        // login
        return new Promise((resolve, reject) => {
            if (credentials.username !== 'admin') return reject()
            if (credentials.password !== 'admin123') return reject()

            setTimeout(function () {
                let token = 'pipz'
                commit('setState', token)
                router.push('/admin')
                resolve(token)
            }, 1000)
        })
    },
    logout: ({ commit }) => {
        commit('logout')
        router.push('/pipz')
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

function removeState (key) {
    window.localStorage.removeItem(key)
}

function setDefaultAuthHeaders () {
    // axios.defaults.headers.common.Authorization = state.isLoggedIn
    //     ? state.isLoggedIn
    //     : ''
}

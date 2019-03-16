export const state = {
    error: false,
    loading: false,
    post: false
}

export const getters = {
    pageState: state => state
}

export const mutations = {
    pageLoading: (state) => {
        if (state.loading !== true) {
            state.loading = true
            state.post = state.error = false
        }
    },
    pagePost: (state) => {
        if (state.post !== true) {
            state.post = true
            state.loading = state.error = false
        }
    },
    pageError: (state) => {
        if (state.error !== true) {
            state.error = true
            state.loading = state.post = false
        }
    }
}

export const actions = {
}

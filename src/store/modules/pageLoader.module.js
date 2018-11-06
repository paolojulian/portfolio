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
            state.post = false
            state.error = false
        }
    },
    pagePost: (state) => {
        if (state.post !== true) {
            state.loading = false
            state.post = true
            state.error = false
        }
    },
    pageError: (state) => {
        if (state.error !== true) {
            state.loading = false
            state.post = false
            state.error = true
        }
    }
}

export const actions = {
}

const mutations = {
    openHobbyModal: (state, { modalName, data }) => {
        if (!checkHobbyModal(state, modalName)) return

        state.modal[modalName].toggle = true
        if (data) {
            state.modal[modalName].data = data
        }
    },
    closeHobbyModal: (state, { modalName }) => {
        if (!checkHobbyModal(state, modalName)) return

        state.modal[modalName].toggle = false
        state.modal[modalName].data = {}
    },
    setHobbyCategories: (state, hobby) => {
        if (!checkHobbyList(state, hobby.hobbyName)) return

        state[hobby.hobbyName].categories = hobby.categories
    },
    setHobbyList: (state, hobbyList) => {
        if (!checkHobbyList(state, hobbyList.hobbyName)) return

        state[hobbyList.hobbyName].list = hobbyList.list
    },

    setStatusError: (state, msg) => {
        state.admin.status.error = true
        state.admin.status.msg = msg
    },

    setStatusSuccess: (state, msg) => {
        state.admin.status.success = true
        state.admin.status.msg = msg
    },

    resetStatus: (state) => {
        state.admin.status.success = false
        state.admin.status.error = false
        state.admin.status.msg = ''
    },

    load (state) {
        state.cooking.pageLoader.onLoad()
    },

    error (state) {
        state.cooking.pageLoader.onError()
    },

    post (state) {
        state.cooking.pageLoader.onPost()
    },

    prevSong: (state) => {
        state.music.currentPlaying--
    },

    nextSong: (state) => {
        state.music.currentPlaying++
    },

    playAudio: (state) => {
        if (state.audio) {
            state.audio.play()
        }
    },

    pauseAudio: (state) => {
        if (state.audio) {
            state.audio.pause()
        }
    },

    stopPlayer: (state) => {
        state.music.isPlaying = false
        state.music.currentPlaying = null
    },

    setCurrentPlaying: (state, currentPlayingIndex) => {
        state.music.currentPlaying = currentPlayingIndex
    },

    setIsPlaying: (state, isPlaying) => {
        state.music.isPlaying = isPlaying
    },

    setTogglePlayer: (state, func) => {
        state.music.TOGGLE_PLAYER = func
    },
    clearTogglePlayer: (state) => {
        clearTimeout(state.music.TOGGLE_PLAYER)
    }
}

/***********
 * PRIVATE HELPERS
 */
function checkHobbyModal (state, modalName) {
    if (!modalName) return false
    if (!state.modal.hasOwnProperty(modalName)) {
        return false
    }
    return true
}

function checkHobbyList (state, hobbyName) {
    if (!hobbyName) return false
    if (!state.hasOwnProperty(hobbyName)) {
        return false
    }
    return true
}

export default mutations

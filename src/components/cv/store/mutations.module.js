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

    setAdminStatus: (state, type, msg) => {
        try {
            state.admin.status[type] = true
            state.admin.status.msg = msg
            setTimeout(() => {
                state.admin.status[type] = false
                state.admin.status.msg = ''
            }, 5000)
        } catch (err) {
            state.admin.status.error = true
            state.admin.status.msg = 'Ooops! Something went wrong'
            setTimeout(() => {
                state.admin.status.error = false
                state.admin.status.msg = ''
            }, 5000)
        }
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

    setCurrentPlaying: (state, currentPlayingIndex) => {
        state.music.currentPlaying = currentPlayingIndex
    },

    setIsPlaying: (state, isPlaying) => {
        state.music.isPlaying = isPlaying
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

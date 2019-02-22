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
        console.warn('Hobby modal has no index of ' + modalName)
        return false
    }
    return true
}

function checkHobbyList (state, hobbyName) {
    if (!hobbyName) return false
    if (!state.hasOwnProperty(hobbyName)) {
        console.warn('Hobby has no index of ' + hobbyName)
        return false
    }
    return true
}

export default mutations
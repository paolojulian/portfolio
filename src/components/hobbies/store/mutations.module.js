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

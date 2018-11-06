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

export default mutations

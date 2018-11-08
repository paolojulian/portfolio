const getters = {
    hobbyModals: state => state.modal,

    viewRecipe: state => state.modal.viewRecipe.data,

    hobbyCooking: state => state.cooking,
    hobbyMusic: state => state.music,
    hobbySports: state => state.sports,
    hobbyCoding: state => state.coding
}

export default getters

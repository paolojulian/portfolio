const getters = {
    hobbyModals: state => state.modal,

    viewRecipe: state => state.modal.viewRecipe.data,
    /* COOKING */
    hobbyCooking: state => state.cooking,
    selectedCategory: state => state.cooking.selectedCategory,
    /* MUSIC */
    hobbyMusic: state => state.music,
    musicList: state => state.music.list,
    currentPlaying: state => state.music.currentPlaying,
    isPlaying: state => state.music.isPlaying,
    togglePlayer: state => state.music.TOGGLE_PLAYER,

    hobbySports: state => state.sports,
    hobbyCoding: state => state.coding
}

export default getters

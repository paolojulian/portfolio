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

    adminStatus: state => state.admin.status,

    hobbySports: state => state.sports,
    hobbyCoding: state => state.coding,
    /* CODING */
    projectList: state => state.coding.list,
    skillList: state => state.skills.list

}

export default getters

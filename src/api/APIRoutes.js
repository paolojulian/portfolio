const API_URL = '/api'
const URL = {
    sports: {
        hiking: {
            gallery: `/sports/hiking/gallery`
        }
    },
    music: {
        main: API_URL + '/music',
        list: API_URL + '/music/list'
    },
    cooking: {
        main: API_URL + '/cooking',
        recipe: API_URL + '/cooking/recipe/:recipeID',
        recipeList: API_URL + '/cooking/recipe'
    },
    coding: {
        languages: API_URL + `/coding/skills/languages`,
        frameworks: API_URL + `/coding/skills/frameworks`,
        companyProjects: API_URL + `/coding/projects/company`,
        personalProjects: API_URL + `/coding/projects/personal`
    }
}

module.exports = URL

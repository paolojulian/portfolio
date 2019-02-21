const URL = {
    sports: {
        hiking: {
            gallery: `/sports/hiking/gallery`
        }
    },
    music: {
        main: '/music',
        list: '/music/list'
    },
    cooking: {
        main: '/cooking',
        recipe: '/cooking/recipe/:recipeID',
        recipeList: '/cooking/recipe'
    },
    coding: {
        languages: `/coding/skills/languages`,
        frameworks: `/coding/skills/frameworks`,
        companyProjects: `/company_projects`,
        personalProjects: `/personal_projects`
    }
}

module.exports = URL

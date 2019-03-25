const URL = {
    sports: {
        hiking: {
            gallery: `/sports/hiking/gallery`
        }
    },
    music: {
        main: '/music',
        list: '/music/list',
        add: '/music/add',
        edit: '/music/edit',
        delete: '/music/delete/:musicID'
    },
    cooking: {
        create: {
            procedure: '/cooking/create/procedure'
        },
        main: '/cooking',
        recipe: '/cooking/recipe/:recipeID',
        recipeList: '/cooking/recipe',
        addRecipe: '/cooking/recipe/add',
        edit: '/cooking/recipe/edit'
    },
    coding: {
        languages: `/coding/skills/languages`,
        frameworks: `/coding/skills/frameworks`,
        companyProjects: `/coding/projects/company`,
        personalProjects: `/coding/projects/personal`
    }
}

module.exports = URL

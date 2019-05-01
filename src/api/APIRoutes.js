const sports = '/sports'
const music = '/music'
const cooking = '/cooking'
const coding = '/coding'
const dropzone = '/dropzone'

const URL = {
    uploads: {
        audio: `${dropzone}/audio`,
        image: `${dropzone}/image`
    },
    sports: {
        main: sports,
        hiking: {
            gallery: `/sports/hiking/gallery`
        }
    },
    music: {
        main: music,
        list: '/music/list',
        add: '/music/add',
        edit: '/music/edit',
        delete: '/music/delete/:musicID'
    },
    cooking: {
        create: {
            procedure: '/cooking/create/procedure'
        },
        main: cooking,
        recipe: '/cooking/recipe/:recipeID',
        recipeList: '/cooking/recipe',
        addRecipe: `${cooking}/recipe/add`,
        ingredients: `${cooking}/ingredients`,
        foodCategories: `${cooking}/food-categories`,
        edit: `${cooking}/recipe/edit`
    },
    coding: {
        main: coding,
        languages: `/coding/skills/languages`,
        frameworks: `/coding/skills/frameworks`,
        companyProjects: `/coding/projects/company`,
        personalProjects: `/coding/projects/personal`,
        projects: `/coding/projects`,
        projectDetails: `/coding/projects/:projectID`
    }
}

module.exports = URL

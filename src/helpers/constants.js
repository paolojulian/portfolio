export const API_URL = process.env.VUE_APP_API
export const API_FAKE = process.env.VUE_APP_API_FAKE

export const S3_IMG_URL = 'https://s3-ap-southeast-1.amazonaws.com/chefpipz-api-portfolio/images/';
export class S3IMG {
    constructor (name) {
        this.imagePath = S3_IMG_URL + name
    }
}
// normal
export const mangoTheme = {
    primary: '#f7da2c',
    secondary: '#fcf0a3',
    accent: '#94c33b',
    dark: '#498036',
    light: '#fefadb'
}
export const theme = {
    primary: '#fffb00',
    accent: '#f2ba49',
    dark: '#3a3a3a',
    light: '#ffffff'
}
// store namespace
export const $cv = 'cvModule'
export const $hobbies = 'hobbyModule'
export const $auth = 'authModule'
export const $common = 'commonModule'
export const $pageLoader = 'pageLoaderModule'

// header titles
export const headers = {
    en: {
        login: 'Login',
        dashboard: 'Dashboard',
        hobbies: 'Hobbies',
        cv: 'Curriculum Vitae',
        portfolio: 'Portfolio'
    }
}

export const hobbiesHeader = {
    en: {
        cooking: 'My Recipes',
        music: 'My Music',
        sports: 'My Sports',
        coding: 'Coding'
    }
}
/**
 * DEFAULT IMAGES
 */
export const getDefaultRecipeImg = require('../assets/img/cooking/default.png')

export default {
    API_URL
}

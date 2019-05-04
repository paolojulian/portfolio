import { MyAPI } from '@/api/API'
import URL from './APIRoutes.frontend'

export class APIHobby extends MyAPI {
    addRecipe (form) {
        return super
                .xhrPost(
                    URL.cooking.addRecipe,
                    form
                )
    }

    updateRecipe (recipeID, data) {
        return super.xhrPatch(URL.cooking.recipe(recipeID), data)
    }

    getRecipes (recipeId, sortBy = 'favorite') {
        let url = recipeId
            ? `${URL.cooking.recipeList}/${recipeId}`
            : URL.cooking.recipeList

        let params = {
            sortBy: sortBy
        }
        return super.xhrGet(url, params)
    }

    getIngredients () {
        let url = URL.cooking.ingredients
        return super.xhrGet(url)
    }

    getFoodCategories () {
        let url = URL.cooking.foodCategories
        return super.xhrGet(url)
    }

    addMusic (form) {
        return super.xhrPost(
            URL.music.add,
            form
        )
    }

    getMusicList () {
        let url = URL.music.list

        return super.xhrGet(url)
    }

    addProject (data) {
        return super.xhrPost(URL.coding.projects, data)
    }

    getProjects () {
        return super.xhrGet(URL.coding.projects)
    }

    deleteProject (projectID, key) {
        return new Promise((resolve, reject) => {
            const promises = [
                super.xhrDelete(URL.coding.projectDetails(projectID)),
                this.deleteImage(key)
            ]
            Promise
                .all(promises)
                .then(() => resolve())
                .catch(err => reject(err))
        })
    }

    editProject (projectID, data) {
        return super.xhrPatch(URL.coding.projectDetails(projectID), data)
    }

    addSkill (form) {
        return super.xhrPost(URL.coding.skills, form)
    }

    getSkillList () {
        return super.xhrGet(URL.coding.skills)
    }

    editSkill (skillID, data) {
        return super.xhrPatch(URL.coding.skillDetails(skillID), data)
    }

    deleteSkill (skillID) {
        return super.xhrDelete(URL.coding.skillDetails(skillID))
    }

    getCodingProjects () {
        return super.xhrGetAll([
            URL.coding.companyProjects,
            URL.coding.personalProjects
        ]);
    }

    getCodingSkills () {
        return super.xhrGetAll([
            URL.coding.languages,
            URL.coding.frameworks
        ])
    }

    updateMusic (musicID, data) {
        return super.xhrPatch(URL.music.edit, { musicID, data })
    }

    deleteMusic (musicID) {
        return super.xhrPost(URL.music.delete, { musicID })
    }

    updateRecipeInfo (payload) {
        return this.xhrPatch(URL.cooking.edit, payload)
    }
    /**
     * Handles the deletion of the whole recipe
     * including it's recipe-ingredients and procedures
     * and the image from s3 bucket
     * @param { Number } recipeID - pk
     * @param { String } key - key of the image in s3 bucket
     */
    deleteRecipe (recipeID, key) {
        return new Promise((resolve, reject) => {
            const promises = [
                super.xhrDelete(URL.cooking.recipe(recipeID)),
                this.deleteImage(key)
            ]
            Promise.all(promises)
                .then(() => resolve())
                .catch(err => reject(err))
        })
    }

    /**
     * Handles all file uploads for audio files
     * @param { Audioj } audioFile 
     */
    uploadAudio (audioFile) {
        return super.xhrUpload(URL.uploads.image, audioFile);
    }
    /**
     * Handles all file uploads for images
     * @param { Image } imageFile 
     */
    uploadImage (imageFile) {
        return super.xhrUpload(URL.uploads.image, imageFile);
    }
    /**
     * Handles all file deletion for images
     * @param { String } key - the key of the image in s3 bucket
     */
    deleteImage (key) {
        return super.xhrDelete(URL.uploads.image, { data: { key } })
    }
}

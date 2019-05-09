<template>
<div class="Cooking">
    <div class="cooking-images">
        <div class="cooking-favorite-dish">
            <FavoriteDish
                v-for="({ name, duration_from, duration_to, imagePath }, i) in favoriteRecipes"
                :key="i"
                :name="name"
                :duration-from="duration_from"
                :duration-to="duration_to"
                :image-path="imagePath"
            />
        </div>
    </div>
    <div class="cooking-text">
        <div class="cooking-title">
        </div>
        <div class="cooking-quote">
        </div>
    </div>
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex'
class ExceedsMaxRecipes extends Error { /**/ }
export default {
    name: 'Cooking-Dashboard',
    components: {
        FavoriteDish: () => import('./FavoriteDish.vue')
    },
    data () {
        return {
            favoriteRecipes: [],
            codes: {
                successGetFavoriteRecipes: 321
            }
        }
    },
    methods: {
        ...mapActions($hobbies, [
            'getFavoriteRecipes'
        ]),
        /** 
         * Runs on template create(), gets the favorite recipes
         */
        initialData () {
            this.getFavoriteRecipe()
                .then(favoriteRecipes => {
                    // Favorite recipes should not exceed 3
                    if (favoriteRecipes.length > 3) {
                        return this.handleError(new ExceedsMaxRecipes)
                    }
                    this.handleSuccess(this.codes.successGetFavoriteRecipes, favoriteRecipes)
                })
                .catch(err => this.handleError(err))
        },
        /**
         * Handles all the success actions for this template
         */
        handleSuccess (statusCode, ...params) {
            switch (statusCode) {
                case this.codes.successGetFavoriteRecipes:
                    this.favoriteRecipes = params[0]
                    break;
                default:
                    this.handleError(new Error('Status code not found! code: ' + statusCode))
                    break;
            }
        },
        /**
         * Handles all the error actions for this template
         * @param { Error } err - Error instance
         */
        handleError (err) {
            if (err) {
                // eslint-disable-next-line
                console.error(err)
            }
        }
    },

    created () {
        this.initialData()
    }
}
</script>

<style scoped>
.Cooking {

}
</style>

<template lang="html">
<div id="HobbyCooking">
    <recipe-card
        v-for="recipe in hobbyCooking.list"
        :key="'recipe_id_' + recipe.id"
        :recipe-id="recipe.id"
        :recipe-name="recipe.name"
        :date-created="recipe.date_created"
        :date-modified="recipe.date_modified"
        @view-recipe="openModal('viewRecipe', recipe)"
    />
    <view-recipe
        v-if="modal.viewRecipe.toggle"
        :recipe-id="modal.viewRecipe.data.id"
        :recipe-name="modal.viewRecipe.data.name"
        @close="closeModal('viewRecipe')"
        />
</div>
</template>

<script type="text/javscript">
import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    data () {
        return {
            modal: {
                viewRecipe: { toggle: false, data: {} }
            }
        }
    },
    components: {
        recipeCard: () => import('./utils/RecipeCard'),
        viewRecipe: () => import('./utils/ViewRecipe')
    },
    computed: {
        ...mapGetters($hobbies, [
            'hobbyCooking',
        ])
    },
    methods: {
        ...mapActions($hobbies, [
            'getHobbyCooking'
        ]),
        closeModal (modalName) {
            if (!this.checkModal(modalName)) return

            this.modal[modalName].toggle = false
        },
        openModal (modalName, payload) {
            if (!this.checkModal(modalName)) return

            this.modal[modalName].toggle = true
            if (payload) {
                this.modal[modalName].data = payload
            }
        },
        checkModal (modalName) {
            if (!this.hasOwnProperty('modal')) return false
            if (!this.modal.hasOwnProperty(modalName)) return false

            return true
        },
        backButtonCloseModalFirst () {
            alert('test')
        }
    },
    created () {
        this.getHobbyCooking()
        window.addEventListener('backbutton', this.backButtonCloseModalFirst, false)
    },
    beforeDestroy () {
        window.removeEventListener('backbutton', this.backButtonCloseModalFirst)
    }
}
</script>

<style scoped>
@media screen and (max-width: 600px){
    #HobbyCooking >>> .RecipeCard{
        margin-bottom: 5px;
        width: 100%;
        height: 500px;
    }
}
@media screen and (min-width: 600px){
    #HobbyCooking {
        padding: 10px;
    }
    #HobbyCooking >>> .RecipeCard{
        margin: 10px;
        margin-bottom: 15px;
        box-shadow: 0 5px 10px #131313;
        width: 300px;
        height: 300px;
        padding: 5px;
        border-radius: 5px;
    }
    #HobbyCooking >>> .RecipeCard:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 15px #131313;
    }
}
#HobbyCooking >>> .RecipeCard{
    position: relative;
    float: left;
    background-color: #fff;
    transition: transform 300ms ease-in-out, box-shadow 200ms linear;
}
#HobbyCooking >>> .RecipeCard__img {
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    height: 70%;
}
#HobbyCooking >>> .RecipeCard__content {
    padding: 5px;
    height: 15%;
}
#HobbyCooking >>> .RecipeCard__name {
    font-weight: 600;
    height: 15%;
}
@media screen and (max-width: 600px){
    #HobbyCooking >>> .RecipeCard__name {
        padding-left: 2em;
        padding-right: 2em;
        padding-top: 1em;
    }
}
#HobbyCooking >>> .RecipeCard__buttons {
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
}
</style>

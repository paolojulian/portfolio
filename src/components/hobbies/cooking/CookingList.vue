<template lang="html">
<div id="CookingList">
    <div id="CookingList__list">
        <div
            v-if="hobbyCooking.list.length === 0 && hobbyCooking.pageLoader.post"
            class="no-recipe">
            No Recipe
        </div>
        <VLoader v-if="hobbyCooking.pageLoader.loading"/>
        <div v-if="hobbyCooking.pageLoader.post">
            <recipe-card
                v-for="recipe in hobbyCooking.list"
                :key="'recipe_id_' + recipe.id"
                :recipe-id="recipe.id"
                :recipe-name="recipe.name"
                :duration-from="Number(recipe.duration_from)"
                :duration-to="Number(recipe.duration_to)"
                :date-created="recipe.dateCreated"
                @view-recipe="openModal('viewRecipe', recipe)"
            />
        </div>
        <div class="clearfix"/>
    </div>
    <view-recipe
        v-if="modal.viewRecipe.toggle"
        :recipe-id="modal.viewRecipe.data.id"
        :recipe-name="modal.viewRecipe.data.name"
        @close="closeModal('viewRecipe')"
        />
</div>
</template>

<script type="text/javascript">
import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapActions } from 'vuex'
export default {
    data () {
        return {
            modal: {
                viewRecipe: { toggle: false, data: {} }
            }
        }
    },

    watch: {
        '$route.params.sortBy': function (sortBy) {
            this.getHobbyCooking(sortBy)
        }
    },

    components: {
        recipeCard: () => import('./RecipeCard'),
        viewRecipe: () => import('./ViewRecipe')
    },

    computed: {
        ...mapGetters($hobbies, [
            'hobbyCooking'
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

    mounted () {
        this.getHobbyCooking(this.$route.params.sortBy)
        window.addEventListener('backbutton', this.backButtonCloseModalFirst, false)
    },

    beforeDestroy () {
        window.removeEventListener('backbutton', this.backButtonCloseModalFirst)
    }
}
</script>

<style scoped>
#CookingList__list {
    position: relative;
    top: 2rem;
    text-align: center;
    margin-bottom: 3vh;
}
.no-recipe {
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
}
@media screen and (min-width: 600px){
    #CookingList__list {
        padding: 1rem;
        top: 0;
        margin-bottom: 0;
    }
}
</style>

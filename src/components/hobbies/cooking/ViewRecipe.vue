<template lang="html">
<VModal id="viewRecipe">
    <div slot="header">
        <span>{{ recipeName }}</span>
        <div class="close-modal"
            @click="$emit('close')">
            <font-awesome-icon
                icon="times"/>
        </div>
    </div>
    <div slot="body">
        <VLoader v-if="isLoading"/>
        <div v-if="isError">
            --
        </div>
        <div v-if="isPost">
            <h4>Ingredients</h4>
            <div v-if="ingredients && ingredients.length > 0">
                <ol>
                    <li v-for="ingredient in ingredients">
                        {{ ingredient.parent.ingredient_name }}
                        <ul v-if="ingredient.sub_ingredients && ingredient.sub_ingredients.length > 0">
                            <li v-for="sub_ingredient in ingredient.sub_ingredients">
                                {{ sub_ingredient.sub_ingredient_name }}
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
            <div v-if="procedures && procedures.length > 0">
                <h4>Procedures</h4>
                <ol>
                    <li v-for="procedure in procedures">
                        {{ procedure.description }}
                    </li>
                </ol>
            </div>
        </div>
    </div>
</VModal>
</template>

<script type="text/javascript">
import { mapActions } from 'vuex'
import { $hobbies } from '@/helpers/constants'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faTimes)
export default {
    props: {
        recipeId: {
            type: Number,
            required: true
        },
        recipeName: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            ingredients: [],
            procedures: [],
            isLoading: true,
            isPost: false,
            isError: false
        }
    },
    methods: {
        ...mapActions($hobbies, [
            'getRecipe'
        ]),
        initialData () {
            this.getRecipe(this.recipeId)
                .then(recipe => {
                    this.ingredients = recipe.ingredients
                    this.procedures = recipe.procedures
                    this.pagePost()
                })
                .catch(message => {
                    console.log(message)
                    this.pageError()
                })
        },
        pageLoading () {
            this.isPost = false
            this.isError = false

            this.isLoaded = true
        },
        pageError () {
            this.isLoading = false
            this.isPost = false

            this.isError = true
        },
        pagePost () {
            this.isLoading = false
            this.isError = false

            this.isPost = true
        }
    },
    created () {
        this.initialData()
    }
}
</script>

<style scoped>
</style>

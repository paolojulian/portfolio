<template lang="html">
<VModal class="ViewRecipe"
    @close="$emit('close')"
>
    <div slot="header"
        class="view-recipe-header"
    >
        {{ recipeName }}
    </div>
    <div slot="body"
        class="view-recipe-body"
    >
        <div class="no-content"
            v-if="recipeIngredients.length <= 0 && procedures.length <= 0"
        >
            No Content
        </div>

        <div class="recipe-ingredients"
            v-if="recipeIngredients.length > 0"
        >
            <label>Ingredients</label>
            <VSpacer/>
            <div v-for="(ingredient, i) in recipeIngredients"
                :key="`recipeIngredient_${i}`"
            >
                {{ i + 1 }}.&nbsp;
                {{ ingredient.name }}
            </div>
        </div>
        <VSpacer/>
        <div class="procedures"
            v-if="procedures.length > 0"
        >
            <label>Procedures</label>
            <VSpacer/>
            <div v-for="(procedure, i) in procedures"
                :key="`procedure_${i}`"
            >
                {{ i + 1 }}.&nbsp;
                {{ procedure.description }}
            </div>
        </div>
    </div>
</VModal>
</template>

<script type="text/javascript">
import { mapActions } from 'vuex'
import { $hobbies } from '@/helpers/constants'
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
            recipeIngredients: [],
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
                .then(({ recipeIngredients, procedures }) => {
                    this.recipeIngredients = recipeIngredients
                    this.procedures = procedures
                })
                .then(() => this.pagePost())
                .catch(message => {
                    this.pageError(message)
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
.ViewRecipe label {
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.view-recipe-body {
    padding: 1rem;
}
</style>

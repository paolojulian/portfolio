<template>
<VModal class="ViewRecipe"
    @close="$emit('close')"
>
    <div slot="body">
        <div class="recipe-ingredients"
            v-if="recipeIngredients.length > 0"
        >
            Ingredients
            <br />
            <div v-for="(ingredient, i) in recipeIngredients"
                :key="`recipeIngredient_${i}`"
            >
                {{ i + 1 }}.&nbsp;
                {{ ingredient.name }}
            </div>
        </div>
        <div class="procedures"
            v-if="procedures.length > 0"
        >
            Procedures
            <br />
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

<script>
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex'

export default {
    props: {
        recipeId: {
            String: String,
            required: true
        }
    },

    data () {
        return {
            recipeIngredients: [],
            procedures: []
        }
    },

    methods: {
        ...mapActions($hobbies, [
            'getRecipe'
        ])
    },

    created () {
        this.getRecipe(this.recipeId)
            .then(({ recipeIngredients, procedures }) => {
                this.recipeIngredients = recipeIngredients
                this.procedures = procedures
            })
    }
}
</script>

<style scoped>

</style>

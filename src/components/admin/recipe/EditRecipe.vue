<template>
<VModal class="EditRecipe"
    @close="$emit('close')"
>
    <div slot="header">
        Edit Recipe
    </div>
    <div slot="body"
        class="recipe-body"
    >
        <form @submit.prevent="handleSubmit">
            <div
                class="no-content"
                v-if="recipeIngredients.length <= 0 && procedures.length <= 0">
                No Content
            </div>

            <!-- INGREDIENTS -->
            <div class="recipe-ingredients"
                v-if="recipeIngredients.length > 0">
                <label>Ingredients</label>
                <VSpacer/>
                <div v-for="(ingredient, i) in recipeIngredients"
                    :key="`recipeIngredient_${i}`"
                >
                    {{ i + 1 }}.&nbsp;
                    <select
                        v-model="ingredient.ingredient_id"
                        :data-test="`recipe update ingredient-${i} name`">
                        <option disabled :value="null">Please select one</option>
                        <option
                            v-for="{ id, name } in ingredientList"
                            :key="`ingredient${id}`"
                            :value="id"
                        >
                            {{ name }}
                        </option>
                    </select>
                    <input type="text"
                        :data-test="`recipe update ingredient-${i} quantity`"
                        placeholder="Quantity"
                        v-model="ingredient.quantity"
                        />
                    <br />
                    <textarea
                        v-model="ingredient.description"
                        placeholder="Description"
                        :data-test="`recipe update ingredient-${i} description`"
                    ></textarea>
                    <br />
                </div>
                <!-- ADD INGREDIENT-->
                <button
                    type="button"
                    @click="addIngredient"
                    data-test="recipe update ingredients add"
                    >
                    <font-awesome-icon icon="plus"/>
                </button>
                <!-- REMOVE INGREDIENT-->
                <button
                    @click="removeIngredient"
                    type="button"
                    v-if="recipeIngredients.length > 1"
                    data-test="recipe update ingredients remove"
                >
                    <font-awesome-icon icon="minus"/>
                </button>
            </div>
            <!-- END INGREDIENTS -->

            <VSpacer/>

            <!-- PROCEDURES -->
            <div class="procedures" v-if="procedures.length > 0">
                <label>Procedures</label>
                <VSpacer/>
                <div v-for="(procedure, i) in procedures"
                    :key="`procedure_${i}`"
                >
                    {{ i + 1 }}.&nbsp;
                    <textarea
                        v-model="procedure.description"
                        :data-test="`recipe update procedure-${i} name`"
                        ></textarea>
                </div>
                <!-- UPDATE PROCEDURE -->
                <button
                    type="button"
                    @click="addProcedure"
                    data-test="recipe update procedures add">
                    <font-awesome-icon icon="plus"/>
                </button>
                <!-- REMOVE PROCEDURE -->
                <button
                    @click="removeProcedure"
                    type="button"
                    v-if="procedures.length > 1"
                    data-test="recipe update procedures remove"
                    >
                    <font-awesome-icon icon="minus"/>
                </button>
            </div>
            <!-- END PROCEDURES -->
            <button
                type="submit"
                data-test="recipe update submit">
                Submit
            </button>
        </form>


    </div>
</VModal>
</template>

<script>
import { Ingredient } from '@/classes/cooking.js'
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex'

export default {
    name: 'EditRecipe',

    props: {
        recipeId: {
            String: Number,
            required: true
        }
    },

    data () {
        return {
            recipeIngredients: [new Ingredient],
            procedures: [{ description: '' }],
            ingredientList: [],
            foodCategories: [],

            codes: {
                success: 321,
                error: 123
            }
        }
    },

    methods: {
        ...mapActions($hobbies, [
            'getRecipe',
            'getIngredients',
            'getFoodCategories',
            'updateRecipe',
            'setStatus'
        ]),
        /**
         * update INGREDIENT BUTTON
         */
        addIngredient () {
            this.recipeIngredients.push(new Ingredient())
        },

        removeIngredient () {
            if (this.recipeIngredients.length > 1) {
                this.recipeIngredients.splice(-1,1)
            }
        },

        addProcedure () {
            this.procedures.push({ description: '' })
        },

        removeProcedure () {
            if (this.procedures.length > 1) {
                this.procedures.splice(-1,1)
            }
        },

        /**
         * Handles the submition of form
         */
        handleSubmit () {
            const payload = {
                recipeID: this.recipeId,
                data: {
                    recipeIngredients: JSON.stringify(this.recipeIngredients),
                    procedures: JSON.stringify(this.procedures)
                }
            }
            this.updateRecipe(payload)
                .then(() => this.handleSuccess(this.codes.success))
                .catch(err => this.handleError(this.codes.error, err))
        },

        /**
         * Handles the success actions
         */
        handleSuccess (statusCode) {
            switch (statusCode) {
                case this.codes.success:
                    this.setStatus({ type: 'success', msg: 'Successfully updated the recipe'})
                    this.$emit('close')
                    break;
                default:
                    this.handleError(this.codes.error, 'No Status code for success function!')
                    break;
            }
        },

        /**
         * Handles the error actions
         */
        handleError (statusCode, err = '') {
            if (err) {
                // eslint-disable-next-line
                console.trace(err)
            }

            switch (statusCode) {
                case this.codes.error:
                    this.setStatus({ type: 'error', msg: 'Unable to update the recipe' })
                    break;
                default:
                    break;
            }
        }


    },

    created () {
        const promises = [
            this.getRecipe(this.recipeId),
            this.getIngredients(),
            this.getFoodCategories()
        ]

        Promise.all(promises)
            .then(response => {
                const { recipeIngredients, procedures } = response[0]
                if (recipeIngredients.length > 0) {
                    this.recipeIngredients = recipeIngredients
                }
                if (procedures.length > 0) {
                    this.procedures = procedures
                }

                this.ingredientList = response[1],
                this.foodCategories = response[2]
            })
            //eslint-disable-next-line
            .catch(err => console.log(err))
    }
}
</script>

<style scoped>
.EditRecipe .recipe-body {
    overflow-y: auto;
}
</style>

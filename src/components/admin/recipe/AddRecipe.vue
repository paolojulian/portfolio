<template>
<VModal class="AddRecipe"
    type="submit"
    @close="$emit('close')"
    @submit="submit"
    >
    <div slot="header">
        Add Recipe
    </div>
    <div slot="body"
        class="add-recipe-body">
        <div class="recipe-name">
            <input type="text"
                data-test="recipe add name"
                v-model="recipe.name"
                placeholder="Recipe Name"
                />
        </div>

        <div class="recipe-category">
            <select v-model="recipe.foodCategoryID"
                data-test="recipe add category"
            >
                <option disabled :value="null">Please select a Category</option>
                <option v-for="{ id, name } in foodCategories"
                    :value="id"
                    :key="`foodCategory_${id}`"
                >
                    {{ name }}
                </option>
            </select>
        </div>

        <div class="recipe-img">
            <input data-test="recipe add image"
                type="file"
                ref="imageFile"
                @change="handleFileUpload"/>
        </div>


        <div class="recipe-ingredients">
            <div>
                <AdminButton 
                    :fab="true"
                    type="redo"
                    @click="reloadIngredients"/>
                <span>&nbsp;Reload Ingredient List</span>
            </div>
            <div>
                <label>Ingredients: </label>
                <AdminButton 
                    :fab="true"
                    type="plus"
                    @click="addIngredient"/>
                <AdminButton 
                    :fab="true"
                    type="delete"
                    color="#f9f9f9"
                    background-color="#99351E"
                    v-if="ingredients.length > 1"
                    @click="removeIngredient"/>
            </div>
            <div v-for="(ingredient, key) in ingredients"
                :key="`ingredient_${key}`"
                :data-test="`recipe add ingredient-${key}`"
            >
                <select v-model="ingredient.id"
                    :data-test="`recipe add ingredient-${key} name`"
                    >
                    <option disabled :value="null">Ingredient</option>
                    <option
                        v-for="{ id, name } in ingredientList"
                        :key="`ingredient${id}`"
                        :value="id"
                    >
                        {{ name }}
                    </option>
                </select>
                <input type="text"
                    :data-test="`recipe add ingredient-${key} quantity`"
                    placeholder="Quantity"
                    v-model="ingredient.quantity"
                    />
                <input type="text"
                    :data-test="`recipe add ingredient-${key} description`"
                    placeholder="Description"
                    v-model="ingredient.description"
                    />
            </div>
        </div>

        <div class="recipe-procedures">
            <div>
                <label>Procedures:</label>
                <AdminButton 
                    :fab="true"
                    type="plus"
                    @click="addProcedure"/>
                <AdminButton 
                    :fab="true"
                    type="delete"
                    color="#f9f9f9"
                    background-color="#99351E"
                    v-if="procedures.length > 1"
                    @click="removeProcedure"/>
            </div>
            <div v-for="(procedure, key) in procedures"
                :key="`procedure_${key}`"
                :data-test="`recipe add procedure-${key}`"
            >
                <textarea v-model="procedures[key]"
                    rows="5"
                    cols="100%"
                    :data-test="`recipe add procedure-${key} name`"
                ></textarea>
            </div>
        </div>

    </div>
</VModal>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex'
import { Ingredient } from '@/classes/cooking.js'
const recipe = {
    name: '',
    favorite: 0,
    durationFrom: 5,
    durationTo: 10,
    foodCategoryID: null,
    imagePath: ''
}
export default {
    name: 'AddRecipe',

    data () {
        return {
            // FOR SUBMITION
            recipe: { ...recipe },
            file: null,
            ingredients: [new Ingredient()],
            procedures: [''],
            // FOR LIST
            ingredientList: [],
            foodCategories: [],
            codes: {
                success: 23
            },
            errors: {
                unableToUpload: {
                    code: 321,
                    status: false,
                    message: ''
                },
                unableToAddRecipe: {
                    code: 123,
                    status: false,
                    message: ''
                }
            }
        }
    },

    methods: {
        ...mapActions($hobbies, [
            'addRecipe',
            'getHobbyCooking',
            'getIngredients',
            'getFoodCategories',
            'uploadImage'
        ]),

        initialData () {
            let promises = [
                this.getIngredients(),
                this.getFoodCategories()
            ]
            Promise.all(promises)
                .then(response => {
                    this.ingredientList = response[0],
                    this.foodCategories = response[1]
                })
                // eslint-disable-next-line
                .catch(err => console.log(err))
        },

        /**
         * Used to reload the ingredient list
         */
        reloadIngredients () {
            this.getIngredients()
                .then(data => {
                    this.ingredientList = data
                })
                // eslint-disable-next-line
                .catch(err => console.log(err))
        },

        addProcedure () {
            this.procedures.push('')
        },

        removeProcedure () {
            if (this.procedures.length > 1) {
                this.procedures.splice(-1,1)
            }
        },

        addIngredient () {
            this.ingredients.push(new Ingredient())
        },

        removeIngredient () {
            if (this.ingredients.length > 1) {
                this.ingredients.splice(-1,1)
            }
        },

        async uploadImageAndGetPath () {
            let form = new FormData();
            form.append('file', this.file);
            form.append('name', this.recipe.name);

            return this.uploadImage(form)
                .then(response => {
                    this.recipe.imagePath = response.imagePath
                })
                .catch(err => { throw err })
        },

        async submit () {
            try {
                // get image path first before saving
                await this.uploadImageAndGetPath();

                const form = {
                    ...this.recipe,
                    ingredients: JSON.stringify(this.ingredients),
                    procedures: JSON.stringify(this.procedures)
                }
                this.addRecipe(form)
                    .then(() => this.handleSuccess(this.codes.success))
                    .catch(err => { throw err; })

            } catch (err) {
                // eslint-disable-next-line
                console.error(err);
                this.handleError(this.errors.unableToAddRecipe.code);
            }

        },

        resetForm () {
            this.recipe = { ...recipe }
            this.ingredients = [new Ingredient()]
            this.procedures = ['']
            this.$refs.imageFile.value = null
        },

        handleSuccess (statusCode) {
            switch (statusCode) {
                case this.codes.success:
                    alert('Success')
                    this.getHobbyCooking()
                    this.resetForm()
                    break;
                default:
                    this.handleError()
                    break;
            }
        },

        handleError (errorCode = '', errorMessage = '') {
            switch (errorCode) {
                // Unable To Upload Image
                case this.errors.unableToUpload.code:
                    this.errors.unableToUpload.status = true
                    if (errorMessage.err && typeof errorMessage.err === 'string') {
                        this.errors.unableToUpload.message = errorMessage.err
                    } else {
                        this.errors.unableToUpload.message = 'Something went wrong in uploading the file'
                    }
                    // remove error after 5 seconds
                    setTimeout(() => {
                        this.errors.unableToUpload.status = false
                        this.errors.unableToUpload.message = ''
                    }, 5000);
                    break;
                // Unable to Add Recipe
                case this.errors.unableToAddRecipe.code:
                    this.errors.unableToAddRecipe.status = true
                    this.errors.unableToAddRecipe.message = 'Something went wrong!!'
                    // remove error after 5 seconds
                    setTimeout(() => {
                        this.errors.unableToAddRecipe.status = false
                        this.errors.unableToAddRecipe.message = ''
                    }, 5000);
                    break;
                default:
                    alert('Error');
                    break;
            }
        },

        handleFileUpload (event) {
            this.file = event.target.files[0]
            if (this.recipe.name.trim() === '') {
                this.recipe.name = this.file.name
            }
            return true
        }
    },

    created () {
        this.initialData()
    }
}
</script>

<style scoped>
.AddRecipe {
    text-align: left;
    padding: 1rem;
}
@media screen and (min-width: 600px) {
    .add-recipe-body {
        padding: 25px;
    }
}
@media screen and (min-width: 1000px) {
    
}
</style>

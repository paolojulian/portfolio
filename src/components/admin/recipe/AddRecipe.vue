<template>
<div class="AddRecipe">
    Add Recipe
    <div class="recipe-name">
        <label>Name: </label>
        <input type="text"
            v-model="recipe.name"
            placeholder="Recipe Name"
            />
    </div>

    <div class="recipe-img">
        <label>Image: </label>
        <input data-test="cooking add-recipe image"
            type="file"
            ref="imageFile"
            @change="handleFileUpload"
        />
    </div>


    <div class="recipe-ingredients">
        <label>Ingredients: </label>
        <br />
        <div v-for="(ingredient, key) in ingredients"
            :key="`ingredient_${key}`"
        >
            <input type="text"
                placeholder="Quantity"
                v-model="ingredient.quantity"
                />
            <br />
            <input type="text"
                placeholder="Description"
                v-model="ingredient.description"
                />
            <br />
            <select v-model="ingredient.id">
                <option disabled :value="null">Please select one</option>
                <option value="8">TEst8</option>
                <option value="9">test9</option>
                <option value="10">Test10</option>
                <option value="11">Test11</option>
            </select>
            <br />
        </div>
        <button @click="addIngredient">
            <font-awesome-icon icon="plus"/>
        </button>
        <button @click="removeIngredient"
            v-if="ingredients.length > 1"
        >
            <font-awesome-icon icon="minus"/>
        </button>
    </div>

    <div class="recipe-procedures">
        <label>Procedures:</label>
        <br />
        <div v-for="(procedure, key) in procedures"
            :key="`procedure_${key}`"
        >
            {{ key + 1 }}. 
            <textarea v-model="procedures[key]"></textarea>
        </div>
        <button @click="addProcedure">
            <font-awesome-icon icon="plus"/>
        </button>
        <button @click="removeProcedure"
            v-if="procedures.length > 1"
        >
            <font-awesome-icon icon="minus"/>
        </button>
    </div>
    <div class="submit-add-recipe">
        <button @click="resetForm">
            RESET
        </button>
        <button @click="submit">
            SUBMIT
        </button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
const URL = require('../../../api/APIRoutes.js')
class Ingredient {
    constructor () {
        this.id = null
        this.quantity = '' 
        this.description = ''
    }
}
const recipe = {
    name: '',
    favorite: 0,
    durationFrom: 5,
    durationTo: 10,
    file: null,
    foodCategoryID: 1
}
export default {
    name: 'AddRecipe',
    data () {
        return {
            recipe: { ...recipe },
            ingredients: [new Ingredient()],
            procedures: ['']
        }
    },
    methods: {

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

        submit () {
            let form = new FormData()
            Object.keys(this.recipe).map((key) => {
                let value = this.recipe[key]
                form.append(key, value)
            })
            form.append('ingredients', JSON.stringify(this.ingredients))
            form.append('procedures', JSON.stringify(this.procedures))
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            axios.post(URL.cooking.addRecipe, form, config)
                .then(this.handleSuccess)
                .catch(this.handleError)
        },

        resetForm () {
            this.recipe = { ...recipe }
            this.ingredients = [new Ingredient()]
            this.procedures = ['']
            this.$refs.imageFile.value = null
        },

        handleSuccess () {
            alert('Success')
        },

        handleError () {
            alert('Error')
        },

        handleFileUpload (event) {
            this.recipe.file = event.target.files[0]
            if (this.recipe.name.trim() === '') {
                this.recipe.name = this.recipe.file.name
            }
            return true
        }
    }
}
</script>

<style scoped>
.AddRecipe {
    text-align: left;
    padding: 1rem;
}
@media screen and (min-width: 600px) {
    .AddRecipe {
        width: 50%;
        margin: auto;
    }
}
@media screen and (min-width: 1000px) {
    
}
</style>

<template>
<div class="AddRecipe">
    Add Recipe
    <div class="recipe-name">
        <label>Name: </label>
        <input type="text" v-model="recipe.name"/>
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
        <div v-for="(ingredient, key) in recipe.ingredients"
            :key="`ingredient_${key}`"
        >
            <select v-model="ingredient.id">
                <option disabled value="">Please select one</option>
                <option value="1">Test</option>
            </select>
            <br />
        </div>
        <font-awesome-icon icon="plus"/>
    </div>

    <div class="recipe-procedures">
        <label>Procedures:</label>
        <br />
        <div v-for="(procedure, key) in recipe.procedures"
            :key="`procedure_${key}`"
        >
            {{ key + 1 }}. 
            <textarea v-model="recipe.procedures[key]"></textarea>
        </div>
        <button @click="addProcedure">
            <font-awesome-icon icon="plus"/>
        </button>
        <button @click="removeProcedure"
            v-if="recipe.procedures.length > 1"
        >
            <font-awesome-icon icon="minus"/>
        </button>
    </div>
    <div class="submit-add-recipe">
        <button @click="submit">
            SUBMIT
        </button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
const URL = require('../../../api/APIRoutes.js')
export default {
    name: 'AddRecipe',
    data () {
        return {
            recipe: {
                name: '',
                favorite: 0,
                durationFrom: 5,
                durationTo: 10,
                file: null,
                ingredients: [
                    new Ingredient('')
                ],
                procedures: [''],
                foodCategoryID: 1
            }
        }
    },
    methods: {

        addProcedure () {
            this.recipe.procedures.push('')
        },

        removeProcedure () {
            if (this.recipe.procedures.length > 1) {
                this.recipe.procedures.splice(-1,1)
            }
        },

        submit () {
            let form = new FormData()
            Object.keys(this.recipe).map((key) => {
                let value = this.recipe[key]
                form.append(key, value)
            })
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            axios.post(URL.cooking.addRecipe, form, config)
                .then(this.handleSuccess)
                .catch(this.handleError)
        },

        handleSuccess () {
            // alert('Success')
        },

        handleError () {
            // alert('Error')
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
class Ingredient {
    constructor (id) {
        this.id = id
    }
}
class Procedure {
    constructor (name) {
        this.name = name
    }
}
</script>

<style scoped>

</style>

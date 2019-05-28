<template>
<div class="Cooking">
    <div class="dashboard-title">
        MY ART OF COOKING
    </div>
    <div class="cooking-content">
        <span v-for="(recipe, i) in favoriteRecipes"
            :key="`recipe_${i}`"
        >
            <img
                class="cooking-content-cards"
                :src="recipe.image_path"
                :alt="recipe.name"
                :width=""
            />
        </span>
    </div>
</div>
</template>

<script>
import { S3_IMG_URL } from '@/helpers/constants';
class Recipe {
    constructor (name, image_name = 'RAMEN_CARD') {
        this.name = name
        this.image_path = `${S3_IMG_URL + image_name}.png`
    }
}
export default {
    name: 'Cooking-Dashboard',
    data () {
        return {
            favoriteRecipes: [
                new Recipe('Ramen', 'RAMEN_CARD'),
                new Recipe('Taco', 'TACO_CARD'),
                new Recipe('Pizza', 'PIZZA_CARD')
            ]
        }
    },
}
</script>

<style scoped>
.Cooking {
    background-color: var(--google-light-light);
    height: 100vh;
    width: 100%;
}
.cooking-content {
    height: 100%;
    width: 100%;
}
.cooking-content-cards {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
@media screen and (min-width: 600px) {
    .cooking-content-cards {
        margin: 50px;
    }
}
@media screen and (min-width: 1000px) {
}
</style>

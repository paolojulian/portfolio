<template>
<div class="Cooking">
    <div class="dashboard-title">
        MY ART OF COOKING
    </div>
    <div class="cooking-content">
        <span v-for="(recipe, i) in favoriteRecipes"
            :key="`recipe_${i}`"
        >
            <span class="cooking-recipe">{{ recipe.name }}</span>
        </span>
    </div>
</div>
</template>

<script>
class Recipe {
    constructor (name, image_path = null) {
        this.name = name
        this.image_path = image_path
    }
}
export default {
    name: 'Cooking-Dashboard',
    data () {
        return {
            favoriteRecipes: [
                new Recipe('Ramen'),
                new Recipe('Taco'),
                new Recipe('Pizza')
            ]
        }
    },
}
</script>

<style scoped>
.Cooking {
    background-color: var(--google-light-light);
    height: 91.5vh;
    width: 100%;
}
.cooking-content {
    height: 100%;
    width: 100%;
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 1000px) {
}
</style>

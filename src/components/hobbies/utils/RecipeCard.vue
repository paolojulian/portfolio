<template lang="html">
<div class="RecipeCard">
    <div class="RecipeCard__img">
    </div>
    <div class="RecipeCard__content">
        <div class="RecipeCard__name">
            {{ recipeName }}
        </div>
        <div class="RecipeCard__buttons">
            <VButton variant="light" text-color="#131313">View Recipe</VButton>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    name: 'RecipeCard',
    props: {
        recipeId: {
            type: Number,
            required: true
        },
        recipeName: {
            type: String,
            required: true
        },
        dateCreated: {
            type: String,
            required: true
        },
        dateModified: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>

<template lang="html">
<div class="RecipeCard">
    <div class="RecipeCard__name">
        {{ recipeName }}
    </div>
    <div class="RecipeCard__img"
        :style="recipeImg"
        />
    <div class="RecipeCard__content">
        <div class="RecipeCard__buttons">
            <VButton variant="light"
                button-color="#000000"
                text-color="#ffffff"
                @click="$emit('view-recipe')"
                >
                View Recipe
            </VButton>
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
    },
    computed: {
        recipeImg () {
            return `background-image: url('${require('@/assets/img/cooking/' + this.recipeId + '.png')}')`
        }
    }
}
</script>

<style scoped>
</style>

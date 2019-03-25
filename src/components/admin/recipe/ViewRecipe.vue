<template>
<VModal class="ViewRecipe"
    @close="$emit('close')"
>
    <div slot="body">
        {{ recipeId }}
    </div>
</VModal>
</template>

<script>
export default {
    props: {
        recipeId: {
            String: String,
            required: true
        }
    },

    methods: {
        getRecipe () {

        }
    }
}
</script>

<style scoped>

</style>

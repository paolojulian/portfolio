<template>
<div class="FavoriteDish">
    <img
        :src="imagePath"
        @error="handleImageError"
        />
</div>
</template>

<script>
import { getDefaultRecipeImg } from '@/helpers/constants.js'
export default {
    name: 'FavoriteDish',

    props: {
        name: {
            type: String,
            required: true
        },
        durationFrom: {
            type: String,
            required: true
        },
        durationTo: {
            type: String,
            required: true
        },
        imagePath: {
            type: String,
            required: true
        }
    },

    methods: {
        handleImageError (event) {
            // Change the image of the recipe card to the default image
            event.error = null
            event.target.src = getDefaultRecipeImg
        }
    }
}
</script>

<style scoped>

</style>

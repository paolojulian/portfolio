<template>
<div class="ProjectCarousel">
    <img
        :src="imagePath"
        @error="handleImageError"
    />
</div>
</template>

<script>
export default {
    name: 'ProjectCarousel',
    props: {
        imagePath: {
            type: String,
            required: true
        }
    },

    data () {
        return {
            defaultImg: require(`@/assets/img/coding/projects/portfolio.png`)
        }
    },
    
    methods: {
        /**
         * Display Default Image in case cannot get the image src
         */
        handleImageError (event) {
            event.error = null
            event.target.src = this.defaultImg
        }
    }
}
</script>

<style scoped>
.ProjectCarousel img {
    width: 100%;
    height: 100%
}
</style>

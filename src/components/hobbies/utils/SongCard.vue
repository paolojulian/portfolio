<template lang="html">
<div class="SongCard">
</div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        genreID: {
            type: Number,
            required: true
        },
        genreName: {
            type: String,
            required: true
        },
        path: {
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
.SongCard {
    padding: .2rem;
}
</style>

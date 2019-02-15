<template lang="html">
<div class="HobbyContent">
    <div class="Hobby__image" :style="imageStyle"/>
    <div class="HobbyContent__header">
        {{ hobbyHeader }}
    </div>
    <div class="HobbyContent__body">
        <span v-for="type in hobbyCategories">
            {{ type }}
        </span>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    props: {
        hobbyHeader: {
            type: String,
            required: true
        },
        hobbyCategories: {
            type: Array,
            required: true
        },
        hobbyImage: {
            type: String,
            required: true
        }
    },

    computed: {
        imageStyle () {
            let style = {}
            style['backgroundImage'] = `url(` + require('../../../assets/img/hobbies/' + this.hobbyImage) + `)`
            return style
        }
    }
}
</script>

<style scoped>
.HobbyContent {
    position: relative;
    width: 100%;
    height: 100%;
}
.Hobby__image {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}
</style>

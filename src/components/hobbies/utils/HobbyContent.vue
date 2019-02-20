<template lang="html">
<div class="HobbyContent">
    <div class="HobbyContent__img" :style="imageStyle"/>
    <div class="HobbyContent__view">
        <span class="center-absolute"><font-awesome-icon icon="eye" /></span>
    </div>
    <div class="HobbyContent__text">
        <div class="HobbyContent__header text-shadow-dark">
            {{ hobbyHeader }}
        </div>
        <div class="HobbyContent__body">
            <div class="center-absolute">
                <span v-for="type in hobbyCategories">
                    {{ type }}
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'
library.add(faEye)

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
cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;

    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 10px 4px rgba(0, 0, 0, 0.5);
    color: #ffffff;
}
.HobbyContent__view {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: -1;

    font-size: 5rem;
}

.HobbyContent__text {
    position: absolute;
    top: 70%;
    width: 100%;
    height: 30%;

    background-color: rgba(0, 0, 0, 0.40);
    font-weight: bold;

    transition: transform 300ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.HobbyContent__text div {
    height: 50%;
}
.HobbyContent__header {
    font-size: 2rem;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
}

.HobbyContent__body{
    position: relative;
    width: 100%;
    letter-spacing: 0.05rem;
}
.HobbyContent__body div{
    width: 90%;
}

.HobbyContent__img {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;

    transition: all 300ms ease-in-out;
}

.HobbyContent:hover .HobbyContent__img {
    transform: scale(1.2);
}
.HobbyContent:hover {
    opacity: 0.8;
}
.HobbyContent:hover .HobbyContent__view {
    z-index: 1;
}
</style>

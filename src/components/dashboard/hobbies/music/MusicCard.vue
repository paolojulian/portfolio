<template>
<div class="MusicCard"
    :style="styles">
    <div class="music-card-img">
        <img :src="imagePath"/>
    </div>
    <div class="music-card-name">
        {{ name }}
    </div>
    <div class="music-card-description">
        {{ description }}
    </div>
</div>
</template>

<script>
export default {
    name: 'MusicCard',
    props: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imagePath: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            required: true
        }
    },
    computed: {
        styles () {
            let style = {}
            style['background-color'] = this.backgroundColor
            return style
        }
    }
}
</script>

<style>
.MusicCard {
    color: var(--google-font-white-primary);
    display: inline-block;
    height: 100%;
    width: 300px;
    margin: 0 20px;

    box-shadow: 0 5px 10px #131313;
    padding: 10px;
    box-sizing: border-box;
}
.music-card-img {
    width: 150px;
    height: 150px;
}
.music-card-name {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
.music-card-description {
    font-weight: 100;
    font-size: 1rem;
}
</style>

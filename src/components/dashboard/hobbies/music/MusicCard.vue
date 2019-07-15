<template>
<div class="MusicCard"
    :style="styles">
    <div class="music-card-description">
        <span>
            {{ description }}
        </span>
    </div>
    <div class="music-card-img">
        <img :src="imagePath"/>
    </div>
    <div class="music-card-name">
        {{ name }}
    </div>
    <div class="music-card-favorite">
        ({{ favorite }})
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
        favorite: {
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
    cursor: pointer;
    color: var(--google-font-white-primary);
    height: 100%;
    width: 300px;
    margin: 0 20px;
    position: relative;
    display: flex;
    flex-direction: column;

    box-shadow: 0 5px 10px #131313;
    padding: 10px;
    padding-bottom: 2rem;
    box-sizing: border-box;
}
.music-card-img {
    margin: auto;
    margin-bottom: 1rem;
    flex-grow: 2;
}
.music-card-name {
    flex: 1;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    margin-bottom: 1rem;
}
.music-card-favorite {
    font-weight: 100;
    font-size: 1rem;
}
.music-card-description {
    position: absolute;
    left: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    opacity: 0;
    transition: 400ms ease-in-out;
    background-color: var(--google-light-light);
    color: var(--google-font-dark-primary);
}
.music-card-description span {
    padding: 10px;
}
/* TRANSITIONS */
.MusicCard:hover .music-card-description{
    opacity: 0.9;
}
</style>

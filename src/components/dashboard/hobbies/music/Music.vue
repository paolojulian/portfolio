<template>
<div class="Music">
    <div class="dashboard-title">
        The Sound of my Life
    </div>
    <div class="music-content">
        <span v-for="(music, i) in musicList"
            :key="`musicList_${i}`"
        >
            <span class="music-name">{{ music.name }}</span>
        </span>
    </div>
    <div class="music-divider"/>
</div>
</template>

<script>
class Music {
    constructor (name, image_path = null) {
        this.name = name
        this.image_path = image_path
    }
}
export default {
    name: 'Music-Dashboard',
    data () {
        return {
            musicList: [
                new Music ('Blues'),
                new Music ('Guitar'),
                new Music ('Rock')
            ]
        }
    }
}
</script>

<style scoped>
.Music {
    position: relative;

    background-color: var(--google-light-secondary);
    height: 120vh;
    width: 100%;
    background-image: url('https://s3-ap-southeast-1.amazonaws.com/chefpipz-api-portfolio/images/music_background.png');
    background-size: cover;
    background-position: cover;
}
.music-divider {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 0;
    height: 0;
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    border-bottom: 100px solid var(--google-grey-primary);
}
</style>

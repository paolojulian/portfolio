<template>
<div class="Music">
    <div class="dashboard-title">
        <span>The Sound of my Life</span>
    </div>
    <div class="music-content">
        <div v-for="(music, i) in musicList"
            :key="`musicList_${i}`"
            class="music-content-card"
        >
            <img
                :src="music.image_path"
                :alt="music.name"
                />
            <div>{{ music.name }}</div>
        </div>
    </div>
    <div class="music-divider"/>
</div>
</template>

<script>
import { S3_IMG_URL } from '@/helpers/constants';
class Music {
    constructor (name, image_name = 'DEFAULT', aos_delay = 0) {
        this.name = name
        this.image_path = `${S3_IMG_URL + image_name}.png`
        this.aos_delay = aos_delay
    }
}
export default {
    name: 'Music-Dashboard',
    data () {
        return {
            musicList: [
                new Music ('Blues', 'BLUES_100'),
                new Music ('Guitar', 'GUITAR_100'),
                new Music ('Rock', 'ROCK_100')
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
.music-content div {
    display: inline-block;
}
.music-content div {
    display: inline-block;
}
</style>

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
    background-color: var(--google-light-secondary);
    height: 91.5vh;
    width: 100%;
}
.music-content div {
    display: inline-block;
}
</style>

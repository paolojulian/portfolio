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
    height: 91.5vh;
    width: 100%;
}
</style>

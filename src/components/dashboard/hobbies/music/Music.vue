<template>
<div class="Music">
    <div class="dashboard-title dashboard-title-light">
        <span>The Sound of my Life</span>
    </div>
    <div class="music-content">
        <MusicCard
            v-for="(music, i) in musicList"
            :key="i"
            :name="music.name"
            :description="music.description"
            :image-path="music.imagePath"
            :background-color="music.backgroundColor"/>
    </div>
    <div class="music-footer">
        <LinkButton
            data-aos="zoom-in"
            :text="`Check out my songs`"
            :backgroundColor="`#EB5757`"
            :color="`#FFFFFF`"
            :linkName="'HobbyMusic'"/>
    </div>
    <div class="music-divider"/>
</div>
</template>

<script>
import { S3_IMG_URL } from '@/helpers/constants';
class Music {
    constructor (name, description, imageName = 'DEFAULT', backgroundColor) {
        this.name = name
        this.description = description
        this.imagePath = S3_IMG_URL + imageName
        this.backgroundColor = backgroundColor
    }
}
export default {
    name: 'Music-Dashboard',
    components: {
        LinkButton: () => import('../../LinkButton.vue'),
        MusicCard: () => import('./MusicCard.vue'),
    },
    data () {
        return {
            musicList: [
                new Music (
                    'Rock',
                    'Linkin Park have helped me cope up during my youthful days as I was sometimes depressed and in anger.',
                    'rock_150px.png',
                    '#2F80ED70'),
                new Music (
                    'Blues',
                    'John Mayer always gives me inspiration about music, not only his skill in guitar but the overall tone and depth on how the music should be played.',
                    'blues_150px.png',
                    '#21212170'),
                new Music (
                    'Guitar',
                    'Guitar is my instrument of choice. Whenever I play it, It’s like being one with my heart and soul.',
                    'guitar_150px.png',
                    '#F2994A70')
            ]
        }
    }
}
</script>

<style scoped>
.Music {
    position: relative;

    background-color: var(--google-light-secondary);
    width: 100%;
    background-image: url('https://s3-ap-southeast-1.amazonaws.com/chefpipz-api-portfolio/images/music_background.jpg');
    background-size: cover;
    background-position: cover;
    background-attachment: fixed;
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
.music-content {
    height: 500px;
}
.music-footer {
    position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
    height: 100px;
}
</style>

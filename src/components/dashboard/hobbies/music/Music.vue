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
            <div class="music-content-img">
                <img
                    :src="music.image_path"
                    :alt="music.name"
                    />
            </div>
            <div class="music-content-desc">
                <span class="text-shadow-light">
                    {{ music.description }}
                </span>
            </div>
        </div>
        <div class="relative">
            <LinkButton
                class="center-absolute"
                :text="`Check out my songs`"
                :backgroundColor="`#EB5757`"
                :color="`#FFFFFF`"
                :linkName="'HobbyMusic'"
            />
        </div>
    </div>
    <div class="music-divider"/>
</div>
</template>

<script>
import { S3_IMG_URL } from '@/helpers/constants';
class Music {
    constructor (name, description, image_name = 'DEFAULT', aos_delay = 0) {
        this.name = name
        this.description = description
        this.image_path = `${S3_IMG_URL + image_name}.png`
        this.aos_delay = aos_delay
    }
}
export default {
    name: 'Music-Dashboard',
    components: {
        LinkButton: () => import('../../LinkButton.vue')
    },
    data () {
        return {
            musicList: [
                new Music (
                    'Rock',
                    'Linkin Park have helped me cope up during my youthful days as I was sometimes depressed and in anger.',
                    'ROCK_100'),
                new Music (
                    'Blues',
                    'John Mayer always gives me inspiration about music, not only his skill in guitar but the overall tone and depth on how the music should be played.',
                    'BLUES_100'),
                new Music (
                    'Guitar',
                    'Guitar is my instrument of choice. Whenever I play it, It’s like being one with my heart and soul.',
                    'GUITAR_100')
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
.music-content {
    margin-left: 60vw;
}
.music-content .relative {
    margin-top: 100px;
}
.music-content-card {
    height: 150px;
    width: auto;

    display: flex;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    margin-bottom: 20px;
}
.music-content-img {
    flex: 1;
}
.music-content-img img{
    width: 150px;
    height: auto;
}
.music-content-desc {
    position: relative;
    flex: 2;
}
.music-content-desc span{
    padding-right: 50px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>

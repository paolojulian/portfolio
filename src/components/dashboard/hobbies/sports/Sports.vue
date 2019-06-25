<template>
<div class="Sports">
    <div class="dashboard-title dashboard-title-light"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom">
        Play with me
    </div>
    <div class="sports-content">
        <SportsCard
            v-for="(sport, i) in sports"
            :key="i"
            :index="i"
            :name="sport.name"
            :image-path="sport.imagePath"
        />
    </div>
</div>
</template>

<script>
import { S3_IMG_URL } from '@/helpers/constants';
class Sport {
    constructor (name, imageName = 'HIKING_200') {
        this.name = name
        this.imagePath = `${S3_IMG_URL + imageName}.png`
    }
}
export default {
    name: 'Sports-Dashboard',

    components: {
        SportsCard: () => import('./SportsCard.vue')
    },

    data () {
        return {
            sports: [
                new Sport('hiking', 'HIKING_200'),
                new Sport('basketball', 'BasketBall_200'),
                new Sport('dota', 'DOTA_200'),
                new Sport('csgo', 'CSGO_200'),
                new Sport('apex', 'APEX_200'),
            ]
        }
    }
}
</script>

<style scoped>
.Sports {
    position: relative;
    height: 91.5vh;
    width: 100%;
    color: var(--google-font-white-primary);
    background-color: var(--google-grey-primary);
}
.sports-content {
    box-sizing: border-box;
    padding-top: 100px;
    height: calc(100% - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>

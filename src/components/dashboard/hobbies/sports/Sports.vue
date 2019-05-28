<template>
<div class="Sports">
    <div class="sports-content">
        <span v-for="(sport, i) in sports"
            :key="`sports_${i}`"
        >
            <img
                data-aos="flip-up"
                :data-aos-delay="sport.aos_delay"
                :src="sport.image_path"
                :alt="sport.name"
            />
            <!-- <span class="sports-name">{{ sport.name }}</span> -->
        </span>
    </div>
</div>
</template>

<script>
import { S3_IMG_URL } from '@/helpers/constants';
class Sport {
    constructor (name, image_name = 'HIKING_200', aos_delay = 0) {
        this.name = name
        this.image_path = `${S3_IMG_URL + image_name}.png`
        this.aos_delay = aos_delay
    }
}
export default {
    name: 'Sports-Dashboard',
    data () {
        return {
            sports: [
                new Sport('hiking', 'HIKING_200', 0),
                new Sport('basketball', 'BasketBall_200', 100),
                new Sport('dota', 'DOTA_200', 200),
                new Sport('csgo', 'CSGO_200', 300),
                new Sport('apex', 'APEX_200', 400),
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
    padding-top: 200px;
    height: calc(100% - 100px);
    width: 100%;
}
.sports-name {
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 1px;
}
</style>

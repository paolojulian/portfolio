<template>
<div class="BestPractices">
    <div class="practices-label uppercase"
        data-aos="fade-up"
        data-aos-duration="500">
        Best Practices
    </div>
    <div class="practices-container">
        <div class="practice"
            v-for="(practice, i) in bestPractices"
            :key="i"
            >
            <div class="Practice__img">
                <img data-aos="fade-right"
                    data-aos-duration="500"
                    :data-aos-delay="i * 200"
                    :src="practice.imagePath"
                    :alt="practice.name"/>
            </div>

            <div class="Practice__text">
                <div class="Practice__name uppercase"
                    data-aos="fade-left"
                    :data-aos-delay="i * 200"
                    data-aos-duration="500">
                    {{ practice.name }}
                </div>

                <div class="Practice__description"
                    :data-aos-delay="i * 200"
                    data-aos="fade-up">
                    {{ practice.description }}
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import { S3_IMG_STATIC_URL } from '@/helpers/constants';
class BestPractices {
    constructor (name, description, image_name = null, aos_delay = 0) {
        this.name = name
        this.description = description
        this.imagePath = `${S3_IMG_STATIC_URL + image_name}.png`
        this.aosDelay = aos_delay
    }
}
export default {
    name: 'Practices',
    data () {
        return {
            bestPractices: [
                new BestPractices('Simple', 'Keeping my functions and designs as simple as possible.', 'SIMPLE_100', 200),
                new BestPractices('Organized', "One step at a time, don't overthink yourself thinking about other things.", 'ORDER_100', 600),
                new BestPractices('Clean', "I’ve always like to make my codes as clean as possible for a better debugging process.", 'CLEAN_100', 1000),
                new BestPractices('Kind', "Kindness always paves off. Keeps your team intact, and also with your clients.", 'KIND_100', 1400)
            ]
        }
    }
}
</script>

<style scoped>
.BestPractices {
    margin: auto;
}
.practices-label {
    letter-spacing: 10px;
    font-weight: 200;
    margin-bottom: 50px;
    font-size: 36px;
}
.practices-container {
    margin-bottom: 20px;
    text-align: left;
}
.practice {
    display: flex;
    margin-bottom: 10px;
}
.Practice__name {
    letter-spacing: 4px;
    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: 5px;
}
.Practice__text {
    padding: 20px;
    font-weight: 100;
}
</style>

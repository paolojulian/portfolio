<template>
<div class="Programming-content">
    <div class="Programming__divider Programming__divider__left"/>
    <div class="Programming__divider Programming__divider__right"/>

    <div class="programming-text-container clearfix"
        id="Programming__container">
        <div class="programming-practices">
            <div class="practices-label uppercase">
                Best Practices
            </div>
            <Practice
                v-for="(practice, i) in bestPractices"
                :key="`practices_${i}`"
                :name="practice.name"
                :description="practice.description"
                :image-path="practice.image_path"/>
        </div>

        <div class="favorite-languages">
            <div class="favorite-languages-label uppercase"
                data-aos="fade-up">
                My Favorite Languages
            </div>
            <div class="programming-favorite-languages">
                <br />
                <div v-for="(language, i) in favoriteLanguages"
                    class="favorite-languages-content"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    :key="i">
                    <div class="favorite-language-img">
                        <img
                            :src="language.image_path"
                            :alt="language.name"/>
                    </div>

                    <div class="favorite-language-name uppercase">
                        {{ language.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="programming-img"></div>
    </div>

    <div class="programming-background">
        <div class="center-absolute">
            <LinkButton
                data-aos="zoom-in"
                data-aos-anchor-placement="bottom-bottom"
                :text="`Check out more...`"
                :linkName="'HobbyCoding'"
            />
            <br />
            <div>Check out my different projects and skillset along with my coding creed.</div>
        </div>
    </div>
    <div class="programming-anchor"></div>
</div>
</template>

<script>
import { S3_IMG_URL } from '@/helpers/constants';
class FavoriteLanguage {
    constructor (name, image_name = '', aos_delay = 0) {
        this.name = name
        this.image_path = `${S3_IMG_URL + image_name}.png`
        this.aos_delay = aos_delay
    }
}
class BestPractices {
    constructor (name, description, image_name = null, aos_delay = 0) {
        this.name = name
        this.description = description
        this.image_path = `${S3_IMG_URL + image_name}.png`
        this.aos_delay = aos_delay
    }
}
export default {
    name: 'Programming-Dashboard',
    components: {
        LinkButton: () => import('../../LinkButton.vue'),
        Practice: () => import('./Practice.vue')
    },
    data () {
        return {
            favoriteLanguages: [
                new FavoriteLanguage('Python', 'PYTHON_100', 100),
                new FavoriteLanguage('Javascript', 'JAVASCRIPT_100', 250),
                new FavoriteLanguage('Java', 'JAVA_100', 400)
            ],
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
/* VARIABLES */
.Programming-content {
    --triangle-height: 80px;
    --negative-triangle-height: calc(var(--triangle-height) * -1);
}
.Programming-content {
    color: var(--google-font-white-primary);
    position: relative;
    width: 100%;
}
.Programming {
    position: absolute;
    top: var(--negative-triangle-height);
    left: 0;
    font-weight: 100;

    height: 100%;
    width: 100%;

    z-index: 11;

    /* background-color: var(--google-grey-primary); */
}
.Programming__divider {
    display: none;
}
.programming-text-container {
    position: static;
    background-color: var(--google-grey-primary);
    padding-top: 150px;
    padding-bottom: 100px;
}
.programming-background {
    position: relative;
    height: 300px;
    width: 100%;
    background-image: url('https://s3-ap-southeast-1.amazonaws.com/chefpipz-api-portfolio/images/Laptop_blurr_720p.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
@media screen and (min-width: 600px) {
    .Programming__divider {
        display: unset;
        position: absolute;
        top: var(--negative-triangle-height);
        width: 0;
        height: 0;
    }
    .Programming__divider.Programming__divider__left {
        left: 0;
        border-bottom: 200px solid var(--google-grey-primary);
        border-right: 150vw solid transparent;
        z-index: 10;
    }
    .Programming__divider.Programming__divider__right {
        right: 0;
        border-bottom: 200px solid var(--google-grey-secondary);
        border-left: 150vw solid transparent;
        z-index: 9;
    }
    .programming-practices,
    .favorite-languages {
        float: left;
        width: 500px;
    }
    .programming-practices {
        padding-left: 100px;
    }
    .practices-label{
        letter-spacing: 10px;
        font-weight: 200;
        font-size: 36px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: 50px;
        text-align: left;
    }
}
@media screen and (min-width: 1000px) {
    .Programming {
        margin: 0 auto;
    }
}
</style>

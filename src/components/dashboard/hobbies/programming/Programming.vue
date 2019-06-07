<template>
<div class="Programming"
    id="Dashboard__Programming">
    <div class="programming-text-container">
        <div class="programming-practices">
            <div v-for="(practice, i) in bestPractices"
                class="practices"
                :key="`practices_${i}`">
                <div class="programming-practice-img">
                    <img data-aos="fade-down"
                        :data-aos-delay="practice.aos_delay"
                        :src="practice.image_path"
                        :alt="practice.name"/>
                </div>

                <div class="programming-practice-name uppercase"
                    data-aos="fade-right"
                    :data-aos-delay="practice.aos_delay">
                    {{ practice.name }}
                </div>

                <br />

                <div class="programming-practice-description"
                    data-aos="fade-up"
                    :data-aos-delay="practice.aos_delay">
                    {{ practice.description }}
                </div>
            </div>
        </div>

        <div class="favorite-languages-label uppercase"
            data-aos="zoom-out">
            My Favorite Languages
        </div>
        <div class="programming-favorite-languages">
            <br />
            <div v-for="(language, i) in favoriteLanguages"
                class="favorite-languages-content"
                data-aos="flip-up"
                :data-aos-delay="language.aos_delay"
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
        <div class="programming-img"></div>
    </div>
    <div class="programming-background">
        <div class="center-absolute">
            <LinkButton
                data-aos="zoom-in"
                data-aos-anchor-placement="bottom-bottom"
                :text="`Check out my projects`"
                :linkName="'HobbyCoding'"
            />
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
        LinkButton: () => import('../../LinkButton.vue')
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
.Programming {
    position: relative;
    font-weight: 100;

    padding-top: 20px;
    height: 100vh;
    width: 100%;

    background-color: var(--google-grey-primary);
    color: var(--google-font-white-primary);
}
.programming-title {

}
.programming-background {
    position: absolute;
    bottom: 0;
    left: 0;

    height: 300px;
    width: 100%;
    background-image: url('https://s3-ap-southeast-1.amazonaws.com/chefpipz-api-portfolio/images/computer.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
.programming-anchor {
    position: absolute;
    bottom: calc(300px - 50px);/** Height of background - height of anchor */
    left: 0;

    width: 0; 
    height: 0; 
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    
    border-top: 100px solid var(--google-grey-primary);
}
.programming-practices,
.programming-favorite-languages {
    display: flex;
    text-align: center;
    justify-content: center;
    width: 75%;
    margin: auto;
}
.programming-practices .practices,
.favorite-languages-content {
    display: flex;
    flex-direction: column;
}
.programming-practices .practices{
    display: inline-block;
}
.programming-practices {
    margin-bottom: 100px;
}
.programming-favorite-languages {
    margin-top: 50px;
}
.favorite-languages-label {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 2px;
}
.programming-practice-name,
.favorite-language-name {
    margin-top: 15px;
    font-size: 1.1rem;
    letter-spacing: 2px;
}
@media screen and (min-width: 600px) {
    .Programming {
        padding-top: 150px;
        padding-bottom: 200px;
    }
    .programming-practices .practices {
        margin-left: 20px;
        margin-right: 20px;
    }
    .favorite-languages-content {
        margin-left: 50px;
        margin-right: 50px;
    }
}
@media screen and (min-width: 1000px) {
    .Programming {
        margin: 0 auto;
    }
}
</style>

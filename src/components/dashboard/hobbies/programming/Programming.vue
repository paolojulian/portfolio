<template>
<div class="Programming"
    id="Dashboard__Programming"
>
    <div class="programming-text-container">
        <div class="programming-practices">
            <span v-for="(practice, i) in bestPractices"
                class="practices"
                :key="`practices_${i}`"
            >
                {{ practice.name }}
            </span>
        </div>
        <div class="programming-main-languages">
            <br />
            <span v-for="(language, i) in favoriteLanguages"
                :key="i">
                {{ language.name }}
            </span>
        </div>
        <div class="programming-img"></div>
    </div>
    <div class="programming-background"></div>
    <div class="programming-anchor"></div>
</div>
</template>

<script>
class FavoriteLanguage {
    constructor (name, level, text = '') {
        this.name = name
        this.level = level
        this.text = text
    }
}
class BestPractices {
    constructor (name, description, image_path = null) {
        this.name = name
        this.description = description
        this.image_path = image_path
    }
}
export default {
    name: 'Programming-Dashboard',
    data () {
        return {
            favoriteLanguages: [
                new FavoriteLanguage('Python', '70'),
                new FavoriteLanguage('Javascript', '85'),
                new FavoriteLanguage('Java', '50')
            ],
            bestPractices: [
                new BestPractices('Simple', 'Keeping my functions and designs as simple as possible.'),
                new BestPractices('Order', "One step at a time, don't overthink yourself thinking about other things."),
                new BestPractices('Clean', "I’ve always like to make my codes as clean as possible for a better debugging process."),
                new BestPractices('Kind', "I am kind to others because being rude will always hurt your team or your clients")
            ]
        }
    }
}
</script>

<style scoped>
.Programming {
    position: relative;

    padding-top: 50px;
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
    bottom: calc(300px - 100px);/** Height of background - height of anchor */
    left: 0;

    width: 0; 
    height: 0; 
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    
    border-top: 100px solid var(--google-grey-primary);
}
@media screen and (min-width: 600px) {
    .Programming {
        padding-top: 250px;
    }
}
@media screen and (min-width: 1000px) {
    .Programming {
        margin: 0 auto;
    }
}
</style>

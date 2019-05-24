<template>
<div class="Programming">
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
            <label>My Personal Favorite Languages</label>
            <br />
            <span v-for="(language, i) in favoriteLanguages"
                :key="i">
                {{ language.name }}
            </span>
        </div>
        <div class="programming-img"></div>
    </div>
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
    min-height: 91.5vh;
    width: 100%;
    background-color: var(--google-grey-primary);
    color: var(--google-font-white-primary);
}
.programming-title {

}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 1000px) {
    .Programming {
        margin: 0 auto;
    }
}
</style>

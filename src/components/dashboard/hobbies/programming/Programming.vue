<template>
<div class="Programming">
    <div class="programming-text-container">
        <div class="dashboard-title">
            My Programming Life
        </div>
        <div class="programming-main-languages">
            <label>My Personal Favorite Languages</label>
            <div v-for="(language, i) in favoriteLanguages"
                :key="i">
                {{ language.name }}
            </div>
        </div>
        <div class="programming-quote">
            
        </div>
    </div>
    <div class="programming-img-container">
        <img/>
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
    constructor (name, description, image_path) {
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
                new BestPractices('Simplicity', 'Keeping my functions and designs as simple as possible', ''),
                new BestPractices('Order', "One step at a time, don't overthink yourself thinking about other things"),
                new BestPractices('Order', "One step at a time, don't overthink yourself thinking about other things")
            ]
        }
    }
}
</script>

<style scoped>
.Programming {
    position: absolute;
    left: 0;
    top: 100vh;

    min-height: 100vh;
    width: 100%;
}
.programming-title {

}
@media screen and (min-width: 600px) {
    .Programming {
        min-height: calc(100vh - var(--my-navbar-height));
    }
}
</style>

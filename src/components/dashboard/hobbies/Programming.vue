<template>
<div class="Programming">
    <div class="programming-text-container">
        <div class="programming-title">
            My Programming Life
        </div>
        <div class="programming-main-languages">
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
export default {
    name: 'Programming-Dashboard',
    data () {
        return {
            favoriteLanguages: [
                new FavoriteLanguage('Python', '70'),
                new FavoriteLanguage('Javascript', '85'),
                new FavoriteLanguage('Java', '50')
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

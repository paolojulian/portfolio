<template>
<div class="FavoriteLanguages">
    <div class="favorite-languages-label uppercase"
        data-aos="fade-up">
        My Favorite Languages
    </div>
    <div class="favorite-languages-container">
        <div class="favorite-language"
            v-for="(language, i) in favoriteLanguages"
            :key="i"
            data-aos="flip-left"
            :data-aos-delay="language.aosDelay"
            >
            <div class="favorite-language-img">
                <img
                    :src="language.imagePath"
                    :alt="language.name"
                    />
            </div>
            <div class="favorite-language-label">
                {{ language.name }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { S3_IMG_URL } from '@/helpers/constants';
class FavoriteLanguage {
    constructor (name, image_name = '', aos_delay = 0) {
        this.name = name
        this.imagePath = `${S3_IMG_URL + image_name}.png`
        this.aosDelay = aos_delay
    }
}
export default {
    name: 'FavoriteLanguages',
    data () {
        return {
            favoriteLanguages: [
                new FavoriteLanguage('Python', 'PYTHON_100', 100),
                new FavoriteLanguage('Javascript', 'JAVASCRIPT_100', 250),
                new FavoriteLanguage('Java', 'JAVA_100', 400)
            ],
        }
    }
}
</script>

<style scoped>
.FavoriteLanguages {

}
.favorite-languages-label{
    letter-spacing: 10px;
    font-weight: 200;
    margin-bottom: 50px;
    font-size: 24px;
}
.favorite-languages-container {
    display: flex;
    justify-content: center;
}
.favorite-language {
    margin: 0 10px;
}
</style>

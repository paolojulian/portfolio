<template>
    <div class="cv-personal-info">
        <div class="cv-section-header cv-section-header-light">
            Personal Info
        </div>
        <div class="cv-personal-informations">
            <div class="cv-personal-address">{{ address }}</div>
            <div class="cv-personal-mobile">{{ mobile }}</div>
            <div class="cv-personal-email">{{ email }}</div>
            <div class="cv-personal-website">
                <a :href="website" target="__blank">
                    {{ website }}
                </a>
            </div>
            <div class="cv-personal-github">
                <a :href="github" target="__blank">
                    {{ github }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import strings from './store/language.js';

export default {
    name: 'CVPersonalInfo',
    data () {
        return {
            address: strings.en.address,
            mobile: strings.en.mobile,
            email: 'paolovincentarch@gmail.com',
            website: 'https://chefpipz.herokuapp.com/',
            github: 'https://github.com/scottypipz'
        }
    }
}
</script>

<style scoped>
.cv-personal-informations div{
    margin-bottom: 10px;
}
</style>

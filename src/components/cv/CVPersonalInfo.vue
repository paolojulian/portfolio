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
        </div>
    </div>
</template>

<script>
export default {
    name: 'CVPersonalInfo',
    data () {
        return {
            address: 'Block 310B 14-19 Anchorvale Road. Singapore, 542310',
            mobile: '65-9483-5657',
            email: 'paolovincentarch@gmail.com',
            website: 'https://chefpipz.herokuapp.com/'
        }
    }
}
</script>

<style scoped>
.cv-personal-informations div{
    margin-bottom: 10px;
}
</style>

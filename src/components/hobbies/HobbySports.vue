<template lang="html">
<div id="HobbySports">
    <Basketball/>
    <Hiking />
    <ESports />
</div>
</template>

<script type="text/javascript">
export default {
    components: {
        Basketball: () => import('./sports/BasketBall.vue'),
        Hiking: () => import('./sports/Hiking.vue'),
        ESports: () => import('./sports/ESports.vue')
    }
}
</script>

<style scoped>
#HobbySports {
    color: #333333;
    text-align: center;
}
#HobbySports >>> .section h2{
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
}
#HobbySports >>> .section {
    padding: 2rem;
    line-height: 1.5rem;
}
#HobbySports >>> .section p{
    text-align: left;
    margin: auto auto;
}

#HobbySports >>> .section.section-light {
    background-color: #f4f4f4;
    color: #666;
}
#HobbySports >>> .section.section-dark {
    background-color: var(--my-dark);
    color: #ddd;
}
#HobbySports >>> .sports-img {
    position: relative;

    background-attachment: fixed;
    opacity: 0.9;
}
@media screen and (min-width: 600px){
    #HobbySports {
        margin-top: 7vh;
    }
}
</style>

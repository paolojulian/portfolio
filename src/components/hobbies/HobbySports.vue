<template lang="html">
<div id="HobbySports">
    <Basketball/>
    <Hiking />
    <Dota />
    <CSGO />
</div>
</template>

<script type="text/javascript">
export default {
    components: {
        Basketball: () => import('./sports/BasketBall.vue'),
        Hiking: () => import('./sports/Hiking.vue'),
        Dota: () => import('./sports/Dota.vue'),
        CSGO: () => import('./sports/CSGO.vue'),
        RainbowSixSiege: () => import('./sports/RainbowSixSiege.vue')
    }
}
</script>

<style scoped>
#HobbySports {
    margin-top: 7vh;
    color: #666666;
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
    opacity: 0.70;

    background-attachment: fixed;
}
</style>

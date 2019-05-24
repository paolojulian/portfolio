<template lang="html">
<div class="Dashboard">
    <MainContent/>
    <Programming/>
    <Cooking/>
    <Music/>
    <Sports/>
    <Footer />
</div>
</template>

<script>

export default {
    name: 'Dashboard',
    components: {
        MainContent: () => import('./dashboard/MainContent.vue'),
        Programming: () => import('./dashboard/hobbies/programming/Programming.vue'),
        Cooking: () => import('./dashboard/hobbies/cooking/Cooking'),
        Music: () => import('./dashboard/hobbies/music/Music'),
        Sports: () => import('./dashboard/hobbies/sports/Sports'),
        Footer: () => import('./dashboard/Footer')
    }
}
</script>

<style scoped>
.Dashboard {
    text-align: center;
}
.Dashboard >>> .dashboard-title {
    text-transform: uppercase;
    letter-spacing: 3px;
    padding: 50px;
    font-size: 32px;
    text-align: center;
    color: var(--google-font-dark-primary);
}
.Dashboard >>> .dashboard-title.dashboard-title-light {
    color: var(--google-font-white-primary);
}
.Dashboard >>> .dashboard-title::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    margin-top: 10px;
    width: 150px;
    height: 5px;
    background-color: var(--google-grey-primary);
}
.Dashboard >>> .dashboard-title.dashboard-title-light::after {
    background-color: var(--google-light-light);
}
</style>

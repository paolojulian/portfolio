<template lang="html">
<div class="Dashboard">
    <MainContent/>
    <Programming/>
</div>
</template>

<script>

export default {
    name: 'Dashboard',
    components: {
        MainContent: () => import('./dashboard/MainContent.vue'),
        Programming: () => import('./dashboard/hobbies/programming/Programming.vue')
    }
}
</script>

<style scoped>
.Dashboard >>> .dashboard-title {
    padding: 50px;
    font-size: 32px;
    text-align: center;
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
    background-color: #131313;
}
</style>

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
        Programming: () => import('./dashboard/hobbies/Programming.vue')
    }
}
</script>

<style scoped>
</style>

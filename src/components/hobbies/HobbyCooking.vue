<template lang="html">
<div id="HobbyCooking">
    <cooking-dashboard/>
    <!-- ./cooking/CookingList.vue -->
    <router-view :key="$route.fullPath"/>
</div>
</template>

<script type="text/javascript">
export default {
    name: 'HobbyCooking',
    components: {
        cookingDashboard: () => import('./cooking/CookingDashboard')
    }
}
</script>

<style scoped>

#HobbyCooking {
    margin-top: 7vh;
}
@media screen and (min-width: 1000px) {
    #HobbyCooking {
        margin-top: unset;
    }
}
</style>

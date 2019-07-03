<template lang="html">
<div id="HobbyCooking">
    <cooking-dashboard/>
    <transition name="fade" mode="out-in">
        <!-- ./cooking/CookingList.vue -->
        <router-view :key="$route.fullPath"/>
    </transition>
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
.HobbyCooking {
}
</style>

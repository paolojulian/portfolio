<template lang="html">
<div id="HobbyCooking">
    <cooking-dashboard/>
    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>
</div>
</template>

<script type="text/javascript">
export default {
    name: 'HobbyCooking',
    components: {
        cookingDashboard: () => import('./utils/CookingDashboard')
    }
}
</script>

<style scoped>
</style>

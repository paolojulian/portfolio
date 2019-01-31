<template lang="html">
<div id="HobbySports">
    <Basketball/>
</div>
</template>

<script type="text/javascript">
export default {
    components: {
        Basketball: () => import('./sports/BasketBall.vue')
    }
}
</script>

<style scoped>
</style>

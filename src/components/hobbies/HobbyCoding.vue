
<template lang="html">
<div id="HobbyCoding">
    <div id="coding-sidebar">
        <codingSidebar></codingSidebar>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    name: 'HobbyCoding',
    components: {
        codingSidebar: () => import('./utils/CodingSidebar.vue')
    }
}
</script>

<style scoped>
#HobbyCoding {
    position: relative;
    height: 93vh;
    display: flex;
}
#coding-sidebar {
    position: relative;
    left: 70%;
    width: 30%;
}
</style>

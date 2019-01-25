
<template lang="html">
<div id="HobbyCoding">
    <codingSkills/>
</div>
</template>

<script type="text/javascript">
export default {
    name: 'HobbyCoding',
    components: {
        codingSidebar: () => import('./utils/CodingSidebar.vue'),
        codingSkills: () => import('./coding/CodingSkills.vue')
    }
}
</script>

<style scoped>
#HobbyCoding {
    position: relative;
    height: 93vh;
    display: flex;
}
</style>

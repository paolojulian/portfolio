
<template lang="html">
<div id="HobbyCoding">
    <div class="clearfix coding-skills">
        <codingSkills/>
    </div>
    <div class="clearfix">
        <codingProjects/>
    </div>
        
</div>
</template>

<script type="text/javascript">
export default {
    name: 'HobbyCoding',
    components: {
        codingSkills: () => import('./coding/CodingSkills.vue'),
        codingProjects: () => import('./coding/CodingProjects.vue')
    }
}
</script>

<style scoped>
#HobbyCoding {
    position: relative;
    height: 93vh;
    overflow-x: hidden;
}
.coding-skills {
    margin-bottom: 10rem;
}
</style>

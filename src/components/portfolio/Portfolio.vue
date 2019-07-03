
<template lang="html">
<div id="Portfolio">
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
    name: 'Portfolio',
    components: {
        codingSkills: () => import('./CodingSkills.vue'),
        codingProjects: () => import('./CodingProjects.vue')
    }
}
</script>

<style scoped>
#Portfolio {
    position: relative;
    height: 93vh;
    overflow-x: hidden;
}
.coding-skills {
    margin-bottom: 2rem;
}
</style>

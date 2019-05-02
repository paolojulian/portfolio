<template>
<div class="AdminSkills">
    AdminSkills
    <AddSkill/>
</div>
</template>

<script>
export default {
    name: 'AdminSkills',
    components: {
        AddSkill: () => import('./skills/AddSkill.vue')
    }
}
</script>

<style scoped>
.AdminSkills {
    padding: 2rem;
}
</style>

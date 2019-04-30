<template>
<div class="AdminProjects">
    AdminProjects
    <AddProject/>
    <br />
    <hr />
    <br />
    <AdminProjectList/>
</div>
</template>

<script>
export default {
    name: 'AdminProjects',
    components: {
        AddProject: () => import('./projects/AddProject.vue'),
        AdminProjectList: () => import('./projects/AdminProjectList.vue')
    }
}
</script>

<style scoped>
.AdminProjects {
    padding: 2rem;
}
</style>

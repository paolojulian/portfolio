<template>
<div class="AdminMusic"
    data-test="admin music"
>
    AdminMusic
    <AddMusic/>
</div>
</template>

<script>
export default {
    name: 'AdminMusic',

    components: {
        AddMusic: () => import('./music/AddMusic.vue')
    }
}
</script>

<style scoped>

</style>

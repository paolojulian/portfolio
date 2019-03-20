<template>
<div class="AdminMusic"
    data-test="admin music"
>
    AdminMusic
    <AddMusic/>
    <AdminMusicList/>
</div>
</template>

<script>
export default {
    name: 'AdminMusic',

    components: {
        AddMusic: () => import('./music/AddMusic.vue'),
        AdminMusicList: () => import('./music/AdminMusicList.vue')
    }
}
</script>

<style scoped>

</style>

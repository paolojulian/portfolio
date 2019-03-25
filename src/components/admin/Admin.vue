<template>
<div class="Admin">
    <admin-navbar/>
    <div class="AdminMain">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</div>
</template>

<script>

export default {
    components: {
        AdminNavbar: () => import('./AdminNavbar.vue')
    }
}
</script>

<style src="./admin.css"></style>
<style src="./admin.table.css"></style>

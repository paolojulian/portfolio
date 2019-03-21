<template>
<div class="Admin">
    <admin-navbar/>
    <div class="AdminMain">
        <transition name="fade">
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

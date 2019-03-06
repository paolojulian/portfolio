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

<style>
.Admin {
    --navbar-height: 50px;
}
.AdminMain {
    position: relative;
    top: 50px;
    left: 0;
    width: 100%;
    min-height: calc(100vh - var(--navbar-height));
}
.AdminMain input,
.AdminMain textarea
{
    border: 0;
    padding: 5px 10px;
    border-radius: 30px;
}
</style>

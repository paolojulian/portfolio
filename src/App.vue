<template>
	<div id="app">
        <navbar v-if="hasNavbar"/>
		<main class="clearfix">
            <page-loader>
                <router-view/>
            </page-loader>
		</main>
        <transition name="slide" mode="in-out">
            <Player/>
        </transition>
	</div>
</template>

<script>
export default {
    name: 'app',
    components: {
        Navbar: () => import('./components/partials/NavBar'),
        PageLoader: () => import('@/components/partials/PageLoader'),
        Player: () => import('./components/hobbies/music/Player.vue')
    },
    computed: {
        hasNavbar () {
            return this.$route.meta.hasOwnProperty('navBar')
                ? this.$route.meta.navBar
                : true
        }
    }
}
</script>

<style>


</style>
<style src='./styles/app.css'></style>
<style src='./styles/transition.css'></style>
<style src='./styles/constants.css'></style>

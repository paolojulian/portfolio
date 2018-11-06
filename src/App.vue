<template>
	<div id="app">
        <navbar v-if="hasNavbar"/>
		<main>
            <page-loader>
                <router-view></router-view>
            </page-loader>
		</main>
	</div>
</template>

<script>
export default {
    name: 'app',
    components: {
        Navbar: () => import('./components/partials/NavBar'),
        PageLoader: () => import('@/components/partials/PageLoader')
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
body {
	margin: 0;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
main {
    margin-top: 7vh;
}
</style>

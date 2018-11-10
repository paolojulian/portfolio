<template>
	<div id="app">
        <navbar v-if="hasNavbar"/>
		<main class="clearfix">
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
html {
    min-height: 100%;
}
body {
	margin: 0;
    background: -webkit-linear-gradient(#e8e8e8, #ececec); 
    background: -o-linear-gradient(#e8e8e8, #ececec); 
    background: -moz-linear-gradient(#e8e8e8, #ececec); 
    background: linear-gradient(#e8e8e8, #ececec); 
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
main {
}
@media screen and (min-width: 600px){
    main {
        margin-top: 7vh;
    }
}
@media screen and (max-width: 600px){
    main {
        margin-bottom: 7vh;
    }
}
@media screen and (max-width: 1000px) {
    .lg-only {
        display: none;
    }
}
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
</style>

<template>
	<div id="app">
        <navbar v-if="hasNavbar"/>
		<main class="clearfix">
            <page-loader>
                <router-view/>
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
* {
    margin: 0;
    padding: 0;
}
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
.text-center {
    text-align: center;
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
.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.bold {
    font-weight: bold;
}
.hide {
    display: none !important;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.float-left {
    float: left
}

.float-right {
    float: right
}

/** COLORS */
:root {

    --my-dark-green:#234d20;
    --my-semidark-green: #36802d;

    --my-light-blue: #04C2C9;
    --my-dark-blue: #00A1A7;
    --my-yellow: rgb(255, 251, 0);
    --my-green: rgba(105, 242, 132, 0.9);

    --my-transparent-dark: rgba(0, 0, 0, 0.75);
    --my-dark: #333;
}
</style>

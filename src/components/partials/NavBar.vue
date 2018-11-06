<template lang="html">
    <header id="NavBar"
        :class="{'dark': isDark}">
        <div id="NavBar__icon">
            <span class="NavBar__icon__text">
                <span class="NavBar__start"
                    :style="'color: ' + theme.primary"
                >chef</span>.PIPZ
            </span>
        </div>
        <ul class="NavBar__clearfix">
            <li v-for="(route, index) in routes">
                <nav-bar-routes 
                    :link="route.link"
                    :name="route.name"
                    :icon="route.icon"
                    :active="currentActive"
                    @click="switchActive"
                    :key="index"
                />
            </li>
        </ul>
    </header>
</template>

<script type="text/javascript">
import NavBarRoutes from './NavBarRoutes'
import { theme } from '@/helpers/mixins'
export default {
    name: 'NavBar',
    mixins: [theme],
    components: {
        NavBarRoutes
    },
    data () {
        return {
            routes: [
                { name: 'Home', link: '/', icon: 'home' },
                { name: 'Hobby', link: '/hobby', icon: 'gamepad' },
                { name: 'Curriculum Vitae', link: '/curricilum-vitae', icon: 'newspaper' }
            ],
            isDark: false,
            currentActive: ''
        }
    },
    watch: {
        '$route' (to, from) {
            this.currentActive = to.path
            if (to.meta.hasOwnProperty('navbarAnimate') && to.meta.navbarAnimate) {
                this.isDark = false
                window.addEventListener('scroll', this.toggleNavbar)
            } else {
                this.isDark = true
                window.removeEventListener('scroll', this.toggleNavbar)
            }
        }
    },
    methods: {
        toggleNavbar () {
            if (window.scrollY > 0) {
                this.isDark = true
            } else {
                this.isDark = false
            }
        },
        switchActive (path) {
            this.currentActive = path
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.toggleNavbar)
    }
}
</script>

<style>
#NavBar {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 7vh;
    padding: 0px 10px;
    box-sizing: border-box;
    transition: 300ms;
    margin-bottom: 6.5vh;

    opacity: 20%;
    color: #ffffff;
    font-weight: 500;

    transition: background-color 500ms ease-in-out;
}
#NavBar.dark {
    background-color: rgba(0, 0, 0, 0.75);
}
</style>

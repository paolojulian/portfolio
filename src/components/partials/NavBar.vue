<template lang="html">
    <header id="NavBar"
        class="no-print"
        :class="{'dark': isDark}">
        <div id="NavBar__icon">
            <span class="NavBar__icon__text">
                <span class="NavBar__start"
                    :style="'color: ' + theme.primary"
                >chef</span>.PIPZ
            </span>
        </div>
        <div id="NavBar__title" class="lg-only">
            {{ headerTitle }}
        </div>
        <ul class="NavBar__clearfix">
            <li v-for="(route, index) in routes"
                :class="{ 'active': $route.path === route.link }"
            >
                <nav-bar-routes 
                    :link="route.link"
                    :name="route.name"
                    :icon="route.icon"
                    :active="currentActive"
                    :key="index"
                />
            </li>
        </ul>
    </header>
</template>

<script type="text/javascript">
import NavBarRoutes from './NavBarRoutes'
import { theme } from '@/helpers/mixins'
class NavbarRoute {
    constructor (name, link, icon) {
        this.name = name
        this.link = link
        this.icon = icon
    }
}
export default {
    name: 'NavBar',
    mixins: [theme],
    components: {
        NavBarRoutes
    },
    data () {
        return {
            routes: [
                new NavbarRoute('Home', '/', 'home'),
                new NavbarRoute('Hobby', '/hobby', 'gamepad'),
                new NavbarRoute('CurriculumVitae', '/curriculum-vitae', 'newspaper')
            ],
            isDark: true
        }
    },
    computed: {
        headerTitle () {
            return this.$route.meta.en_title ? this.$route.meta.en_title : ''
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
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.toggleNavbar)
    }
}
</script>

<style>
@media screen and (min-width: 600px){
    #NavBar {
        top: 0;
        left: 0;
        margin-bottom: 6.5vh;
    }
}
@media screen and (max-width: 600px){
    #NavBar {
        bottom: 0;
        left: 0;
        margin-top: 6.5vh;
    }
}
#NavBar {
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 7vh;
    padding: 0px 10px;
    box-sizing: border-box;
    transition: 300ms;

    opacity: 20%;
    color: #ffffff;
    font-weight: 500;

    background-color: var(--my-dark)
}
#NavBar__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#NavBar li * {
    cursor: pointer;
}
#NavBar ul li.active{
    background: #fffb00;
}
#NavBar ul li.active a {
    color: #333333;
}
</style>

<template lang="html">
    <header id="NavBar"
        class="no-print"
        :class="{'dark': isDark}">
        <div id="NavBar__icon">
            <span class="NavBar__icon__text">
                <!-- <span class="NavBar__start"
                    :style="'color: ' + theme.primary"
                >chef</span>.PIPZ -->
                PIPZ
            </span>
        </div>
        <!-- <div id="NavBar__title" class="xl-only">
            {{ headerTitle }}
        </div> -->
        <ul class="NavBar__clearfix">
            <li v-for="(route, index) in routes"
                :key="`links${index}`"
                :class="{ 'active': $route.path === route.link }"
            >
                <nav-bar-routes
                    :link="route.link"
                    :name="route.name"
                    :icon="route.icon"
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
                new NavbarRoute('Recipes', '/hobby/cooking/mainCourse', 'fire'),
                new NavbarRoute('Songs', '/hobby/music', 'music'),
                new NavbarRoute('Sports', '/hobby/sports', 'gamepad'),
                new NavbarRoute('Portfolio', '/portfolio', 'keyboard'),
                new NavbarRoute('CV', '/curriculum-vitae', 'newspaper')
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
        '$route' (to) {
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
/* MOBILE */
#NavBar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: var(--my-navbar-height);

    z-index: 999;
    padding: 0px 10px;
    box-sizing: border-box;

    font-weight: 500;
    color: #d3d3d3;
    font-weight: 300;

    opacity: 0.9;
    background-color: var(--my-transparent-dark);
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
    background: rgba(255, 255, 255, 0.1);
}
#NavBar__icon {
    display: none;
}
@media screen and (min-width: 1000px){
    #NavBar__icon {
        display: block;
        line-height: 7vh;
        padding: 0px 10px;
        font-size: 20px;
        height: 5vh;
        float: left;
        cursor: default;
    }
    #NavBar {
        top: 0;
        left: 0;
        margin-bottom: 6.5vh;
        letter-spacing: 0.2rem;
        transition: 300ms;
    }
}
</style>

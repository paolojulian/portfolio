<template>
	<div id="app"
        :class="{
            'has-player': currentPlaying !== null,
            'no-player': currentPlaying === null,
            'has-header': hasHeader,
            'dark-theme': theme === 'dark',
            'light-theme': theme === 'light'
        }"
    >
        <MyHeader v-if="hasHeader" />
		<main class="Main clearfix"
            :class="{ 'main-has-navbar': hasNavbar }"
        >
            <page-loader>
                <router-view/>
            </page-loader>
		</main>
        <transition name="fade" mode="out-in">
            <Player/>
        </transition>
        <navbar v-if="hasNavbar" />
	</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'app',
    components: {
        Navbar: () => import('./components/partials/NavBar'),
        MyHeader: () => import('./components/partials/MyHeader'),
        PageLoader: () => import('@/components/partials/PageLoader'),
        Player: () => import('./components/hobbies/music/Player.vue')
    },
    computed: {
        ...mapGetters($hobbies, [
            'currentPlaying'
        ]),
        hasNavbar () {
            return this.$route.meta.hasOwnProperty('navBar')
                ? this.$route.meta.navBar
                : true
        },
        hasHeader () {
            return this.$route.meta.hasOwnProperty('header')
                ? this.$route.meta.header
                : false
        },
        theme () {
            return this.$route.meta.hasOwnProperty('theme')
                ? this.$route.meta.theme
                : false
        }
    },
    methods: {
        ...mapActions($hobbies, [
            'getMusicList'
        ])
    },

    created () {
        this.getMusicList()
    }
}
</script>

<style>


</style>
<style src='./styles/app.css'></style>
<style src='./styles/transition.css'></style>
<style src='./styles/constants.css'></style>
<style src='./styles/animations.css'></style>

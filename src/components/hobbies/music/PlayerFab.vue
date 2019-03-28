<template>
<div class="player-fab">
    <VFab 
        v-if="willShow"
        type="music"
        size="3rem"
        backgroundColor="var(--my-parsley)"
        color="#ffffff"
        @click="playMusic()"
    >
        <font-awesome-icon icon="play"/>
    </VFab>
    <VFab 
        v-show=" ! willShow && $route.name !== 'HobbyMusic'"
        class="player-fab-toggle"
        @mouseover="SHOW_PLAYER"
        @mouseenter="SHOW_PLAYER"
        type="music"
        size="3rem"
        backgroundColor="var(--my-yellow)"
        color="var(--my-dark)"
        @click="stopPlayer()"
    >
        <font-awesome-icon icon="music"/>
    </VFab>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faMusic } from '@fortawesome/free-solid-svg-icons'
library.add( faPlay, faMusic )

import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapMutations } from 'vuex'

import togglePlayerMixin from './togglePlayer.mixin.js';
export default {
    mixins: [
        togglePlayerMixin
    ],
    computed: {
        ...mapGetters($hobbies, [
            'currentPlaying',
            'musicList'
        ]),
        willShow () {
            if (this.$route.name === 'HobbyMusic') {
                return false
            }
            if (this.currentPlaying !== null) {
                return false
            }
            return true
        }
    },
    methods: {
        ...mapMutations($hobbies, [
            'setCurrentPlaying',
            'setIsPlaying',
            'stopPlayer'
        ]),
        playMusic () {
            if (this.musicList.length > 0) {
                let rand = this.GET_RANDOM_INT(0, this.musicList.length - 1)
                this.setCurrentPlaying(rand)
                this.setIsPlaying(true)
            }
        }
    }
}
</script>

<style scoped>
.player-fab {
    position: fixed;
    z-index: 1000;
    right: 1rem;
    bottom: calc(7vh - 2rem);
}
@media screen and (min-width: 600px) {
    .player-fab {
        right: 1.5rem;
        bottom: calc(7vh + 1.5rem);
    }
}
@media screen and (min-width: 1000px) {
    .player-fab {
        bottom: 2vh;
    }
}
</style>

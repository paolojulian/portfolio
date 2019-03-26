<template>
<div class="player-fab"
    v-if="willShow"
>
    <VFab 
        type="music"
        size="3rem"
        backgroundColor="var(--my-parsley)"
        color="#ffffff"
        @click="playMusic()"
    >
        <font-awesome-icon icon="play"/>
    </VFab>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
library.add( faPlay )

import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapMutations } from 'vuex'
export default {
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
            'setIsPlaying'
        ]),
        playMusic () {
            if (this.musicList.length > 0) {
                this.setIsPlaying(true)
                this.setCurrentPlaying(0)
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
        bottom: 1.5rem;
    }
}
</style>

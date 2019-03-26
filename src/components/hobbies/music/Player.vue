<template lang="html">
<div id="Player"
    :class="{ 'dim': $route.name !== 'HobbyMusic' }"
    v-if="currentPlaying !== null">
    <div class="Player__relative">
        <div id="Player__seekbar">
            <input type="range"
                class="slider theme"
                @change="seek"
                v-model="musicSlider"
                :style="sliderCss"
                min="0"
                max="100"/>
        </div>
        <div class="Player__flex">
            <div id="Player__description" class="text-shadow-dark">
                <span id="Player__title">
                    {{ current.name }}
                </span>
                <span id="Player__genre">
                    {{ current.genreName }}
                </span>
            </div>

            <div id="Player__controls">
                <div id="Player__actions">
                    <div class="prevButton" @click="prev"/>
                    <div class="playButton"
                        @click="togglePlayPause"
                        v-show=" ! isPlaying"/>
                    <div class="pauseButton"
                        @click="togglePlayPause"
                        v-show="isPlaying"/>
                    <div class="nextButton" @click="next"/>
                </div>
            </div>

            <div id="Player__others">

            </div>
            <div class="Player__fab__close" @click="closePlayer">
                <font-awesome-icon icon="times-circle" />
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faTimesCircle)

import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapMutations } from 'vuex'
export default {
    data () {
        return {
            musicSlider: 0,
            position: '0%',
            localCurrentPlaying: null
        }
    },

    watch: {
        isPlaying (value) {
            if (!this.audio) return

            if (value) {
                this.audio.play()
            } else {
                this.audio.pause()
            }
        },

        currentPlaying (value) {
            if (!this.hasAudio) return false

            this.stopAudio()
            this.setAudio(value)
            this.resetAudio()
        },

        musicSlider (value) {
            if (!value) return
            if (value < 100) return

            this.next()
        }
    },

    computed: {
        ...mapGetters($hobbies, [
            'musicList',
            'currentPlaying',
            'isPlaying'
        ]),

        hasAudio () {
            return this.musicList.length > 0
        },

        current () {
            if (!this.hasAudio) return new Song()

            let audio = this.musicList[this.localCurrentPlaying]
            return new Song(
                audio.name,
                audio.genre_name,
                audio.audio_path
            )
        },

        audio: {
            get () {
                if (!this.hasAudio) return null
                if (this.musicList[this.localCurrentPlaying] === void 0) return null

                let audioPath = this.musicList[this.localCurrentPlaying].audio_path
                let song = require('@/assets/audio/' + audioPath)
                return new Audio(song)
            },
            set () {

            }
        },

        sliderCss () {
            let position = this.musicSlider / 100
            return {
                backgroundImage: `-webkit-gradient(
                    linear,
                    left top,
                    right top,
                    color-stop(${position}, rgb(255, 251, 0)),
                    color-stop(${position}, #ffffff)
                )`
            }
        }
    },

    methods: {
        ...mapMutations($hobbies, [
            'setCurrentPlaying',
            'setIsPlaying',
            'stopPlayer'
        ]),

        togglePlayPause () {
            if (!this.audio) return

            // toggle is playing
            this.setIsPlaying(!this.isPlaying)
        },

        prev () {
            if (!this.audio) return
            // if has already played some music, just return to start
            if (this.audio.currentTime / this.audio.duration * 100 > 5) {
                this.audio.currentTime = 0
            } else {
                this.stopAudio()
                let currentPlaying = this.localCurrentPlaying <= 0
                    ? this.musicList.length - 1
                    : this.localCurrentPlaying - 1
                this.setCurrentPlaying(currentPlaying)
            }
        },

        next () {
            this.stopAudio()
            let currentPlaying = this.localCurrentPlaying >= this.musicList.length - 1
                ? 0
                : this.localCurrentPlaying + 1

            this.setCurrentPlaying(currentPlaying)
        },

        resetAudio () {
            if (this.audio) {
                this.listen()
                if (this.isPlaying) {
                    this.audio.play()
                }
            }
        },

        setAudio (value) {
            this.localCurrentPlaying = value
            if (this.musicList[value] === void 0) return

            let audioPath = this.musicList[value].audio_path
            let song = require('@/assets/audio/' + audioPath)
            this.audio = new Audio(song)
        },

        stopAudio () {
            if (this.audio) {
                this.audio.pause()
                this.audio.currentTime = 0
            }
        },

        listen () {
            if (!this.audio) return

            this.removeAudioListener()
            this.audio.addEventListener('timeupdate', this.timeUpdate)
        },

        removeAudioListener () {
            this.stopAudio()
            this.audio.removeEventListener('timeupdate', this.timeUpdate)
        },

        timeUpdate () {
            let position = this.audio.currentTime / this.audio.duration * 100
            if (Number.isNaN(position)) {
                this.musicSlider = 0
                this.position = '0%'
            } else {
                this.musicSlider = position
                this.position = position + '%'
            }
        },

        seek () {
            this.audio.currentTime = (this.musicSlider / 100) * this.audio.duration
        },

        closePlayer () {
            this.removeAudioListener()
            this.stopPlayer()
        }
    },
    created () {
        this.listen()
    },
    destroyed () {
        this.removeAudioListener()
    }
}

class Song {
    constructor (name = 'Title', genreName = 'Genre', audioPath = null) {
        this.name = name
        this.genreName = genreName
        this.audioPath = audioPath
    }
}
</script>

<style scoped>
/* MOBILE */
#Player {
    z-index: 90;
    position: fixed;
    left: 0;
    bottom: var(--my-player-height);
    height: var(--my-player-height);
    width: 100vw;

    color: #d3d3d3;
    background-color: #000000;
}
.Player__relative {
    position: relative;
    width: 100%;
    height: 100%;
}
.Player__flex {
    height: 99%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
}
#Player__title {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.1rem;
    font-size: 1rem;
}
#Player__controls {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
}
#Player__genre {
    display: none;
}

#Player__actions {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#Player__description, #Player__others {
    flex: 1;
    height: 100%;
    width: 100%
}

#Player .theme, #Player .slider::-webkit-slider-thumb {
    background-color: var(--my-yellow);
}

#Player__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#Player__seekbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;
    border-radius: 50px;
    display: flex;
    text-align: left;
}

#Player__seekbar .slider {
    -webkit-appearance: none; /* used to disable default look of slider */
    outline: none;
    height: 2px;
    border-radius: 20px;
    background: #ffffff;
    margin: unset;
    width: 100%;
}

#Player__seekbar .slider::-moz-range-progress {
    background: red;
    height: 2px;
}

#Player__seekbar .slider::-webkit-slider-thumb {
    /* -webkit-appearance: none; */
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-color: #ffffff;
}

#Player__seekbar .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: var(--my-yellow);
    border-radius: 50%;
}

::-webkit-progress-value {
  background-color: orange;
}

.playButton, .pauseButton, .prevButton, .nextButton {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.playButton {
    display: inline-block;
    background-image: url('../../../assets/img/music/Play_500px_yellow_dark.png');
}
.pauseButton {
    display: inline-block;
    background-image: url('../../../assets/img/music/Pause_500px_yellow_dark.png');
}
.prevButton {
    display: inline-block;
    background-image: url('../../../assets/img/music/Prev_500px_yellow_dark.png');
}
.nextButton {
    display: inline-block;
    background-image: url('../../../assets/img/music/Next_500px_yellow_dark.png');
}
.playButton, .pauseButton {
    background-size: 2rem 2rem;
    width: 2rem;
    height: 2rem;
}
.prevButton, .nextButton {
    background-size: 1.5rem 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}
.Player__fab__close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #ffffff;
    font-size: 1.5rem;
    right: 1rem;
}

/* WEB */
@media screen and (min-width: 1000px){
    #Player {
        top: 90vh;
        left: 0;
        height: 10vh;
        width: 100vw;
        transition: all 100ms ease-in-out;
    }
    #Player__title {
        font-weight: 500;
        letter-spacing: 0.2rem;
        font-size: 1.5rem;
    }
    #Player__genre {
        display: inline;
        font-weight: 300;
        font-size: 1rem;
    }
    #Player__controls {
        flex-grow: 2;
    }

    /* SEEKBAR */
    #Player__seekbar {
        cursor: pointer;
    }
    #Player__seekbar .slider {
        height: 2px;
    }

    #Player__seekbar .slider::-moz-range-progress {
        height: 2px;
    }
    #Player__seekbar .slider::-webkit-slider-thumb {
        /* -webkit-appearance: none; */
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
    #Player__seekbar .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    /* CONTROLS */
    .playButton, .pauseButton{
        transition: all 100ms ease-in-out;
        cursor: pointer;
        background-size: 50px 50px;
        width: 50px;
        height: 50px;
    }
    .prevButton, .nextButton {
        transition: all 100ms ease-in-out;
        cursor: pointer;
        background-size: 40px 40px;
        width: 40px;
        height: 40px;
    }
    .playButton:hover {
        background-image: url('../../../assets/img/music/Play_500px_yellow.png');
    }
    .pauseButton:hover {
        background-image: url('../../../assets/img/music/Pause_500px_yellow.png');
    }
    .prevButton:hover {
        background-image: url('../../../assets/img/music/Prev_500px_yellow.png')
    }
    .nextButton:hover {
        background-image: url('../../../assets/img/music/Next_500px_yellow.png')
    }

    .Player__fab__close {
        cursor: pointer;
        font-size: 2rem;
        right: 2rem;
    }
    .Player__fab__close:hover {
        color: var(--my-yellow);
    }
}
</style>

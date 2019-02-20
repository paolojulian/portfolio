<template lang="html">
<div id="Player" v-if="currentPlaying !== null">
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

        <div id="Player__seekbar">
            <input type="range"
                class="slider theme"
                @change="seek"
                v-model="musicSlider"
                :style="sliderCss"
                min="0"
                max="100"/>
        </div>
    </div>

    <div id="Player__others">

    </div>

</div>
</template>

<script type="text/javascript">
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
            set (value) {
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
            'setIsPlaying'
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
#Player {
    position: fixed;
    top: 85vh;
    left: 0;
    height: 15vh;
    width: 100vw;

    color: #d3d3d3;
    background-color: #111111;
    font-size: 1rem;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
}

#Player__controls {
    flex-grow: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
}

#Player__actions {
    height: 60%;
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

#Player__title {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.2rem;
    font-size: 2.5rem;
}
#Player__genre {
    font-weight: 300;
    font-size: 1rem;
}

#Player__seekbar {
    width: 80%;
    margin: auto auto;
    height: 1px;
    background-color: #d3d3d3;
    border-radius: 50px;
    display: flex;
    cursor: pointer;
    text-align: left;
    margin-bottom: 2.5rem !important;
    position: relative;
}

#Player__seekbar .slider {
    -webkit-appearance: none; /* used to disable default look of slider */
    outline: none;
    height: 5px;
    border-radius: 20px;
    background: #ffffff;
    margin: unset;
    width: 100%;
}
#Player__seekbar .slider::-webkit-slider-thumb {
    /* -webkit-appearance: none; */
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border-color: #ffffff;
    cursor: pointer;
}

#Player__seekbar .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background-color: var(--my-yellow);
    border-radius: 50%;
    cursor: pointer;
}

#Player__seekbar .slider::-moz-range-progress {
    background: red;
    height: 5px;
}

::-webkit-progress-value {
  background-color: orange;
}

#Player__seekbar .fill {
    position: absolute;
    left: 0;
}

#Player__seekbar .handle {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    transform: translateY(-50%) scale(1.5);
}

.playButton, .pauseButton, .prevButton, .nextButton {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.playButton {
    display: inline-block;
    background-image: url('../../../assets/img/music/Play_500px_yellow_dark.png');
    background-size: 50px 50px;
    width: 50px;
    height: 50px;
    transition: all 100ms ease-in-out;
    cursor: pointer;
}
.playButton:hover {
    background-image: url('../../../assets/img/music/Play_500px_yellow.png')
}
.pauseButton {
    display: inline-block;
    background-image: url('../../../assets/img/music/Pause_500px_yellow_dark.png');
    background-size: 50px 50px;
    width: 50px;
    height: 50px;
    transition: all 100ms ease-in-out;
    cursor: pointer;
}
.pauseButton:hover {
    background-image: url('../../../assets/img/music/Pause_500px_yellow.png');
}
.prevButton {
    display: inline-block;
    background-image: url('../../../assets/img/music/Prev_500px_yellow_dark.png');
    background-size: 40px 40px;
    width: 40px;
    height: 40px;
    transition: all 100ms ease-in-out;
    cursor: pointer;
}
.prevButton:hover {
    background-image: url('../../../assets/img/music/Prev_500px_yellow.png')
}
.nextButton {
    display: inline-block;
    background-image: url('../../../assets/img/music/Next_500px_yellow_dark.png');
    background-size: 40px 40px;
    width: 40px;
    height: 40px;
    transition: all 100ms ease-in-out;
    cursor: pointer;
}
.nextButton:hover {
    background-image: url('../../../assets/img/music/Next_500px_yellow.png')
}
</style>

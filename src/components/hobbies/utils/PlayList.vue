<template lang="html">
<div id="MyCovers">
    <table>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Genre</th>
            <th>Date Added</th>
        </tr>
        <tr v-for="(music, index) in hobbyMusic.list"
            :class="{ 'currentPlaying': currentPlaying === index }">
            <td>
                <button
                    v-if="( ! isPlaying && currentPlaying === index) || currentPlaying !== index"
                    @click="playAudio(index)">
                    Play
                </button>
                <button
                    v-if="isPlaying && currentPlaying === index"
                    @click="pauseAudio()">
                    Pause
                </button>
            </td>
            <td>{{ music.name }}</td>
            <td class="tbl-genre">
                <router-link to="/hobby">
                    {{ music.genre_name }}
                </router-link>
            </td>
            <td>{{ music.date_created | convertDateTime }}</td>
        </tr>
    </table>
</div>
</template>

<script text="text/javascript">
import { $hobbies } from '@/helpers/constants'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import SongCard from './SongCard'

export default {

    components: {
        SongCard
    },

    computed: {
        ...mapGetters($hobbies, [
            'hobbyMusic',
            'currentPlaying',
            'isPlaying'
        ])
    },

    methods: {
        ...mapMutations($hobbies, [
            'setCurrentPlaying',
            'setIsPlaying'
        ]),
        ...mapActions($hobbies, [
            'getMusicList'
        ]),
        playAudio (index) {
            this.setIsPlaying(true)
            this.setCurrentPlaying(index)
        },
        pauseAudio () {
            this.setIsPlaying(false)
        }
    },

    created () {
        this.getMusicList()
    }
}
</script>

<style scoped>
#MyCovers {
    width: 60%;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.60);
    box-shadow: inset 0px 0px 50px 2px rgba(0, 0, 0, 0.60);
    color: #ffffff;
}
#MyCovers table {
    width: 100%;
    border-spacing: 0;
}
#MyCovers table th, #MyCovers table td {
    border-collapse: collapse;
    padding: 1rem;
}
#MyCovers table td {
    border-bottom: 1px solid rgba(230, 230, 230);
}
#MyCovers th {
    text-align: left;
    border-bottom: 1.5px solid rgba(105, 242, 132, 0.9);
    color: rgba(105, 242, 132, 0.9);
}
.tbl-genre a {
    color: inherit;
    text-decoration: none;
}
.tbl-genre a:hover {
    text-decoration: underline;
}
.currentPlaying {
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
}
</style>

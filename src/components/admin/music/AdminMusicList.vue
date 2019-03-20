<template>
<div class="AdminMusicList">
    <table>
        <tr v-for="({ name, audio_path, dateCreated, id }) in hobbyMusic.list"
            :key="id"
        >
            <td>{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ audio_path }}</td>
            <td>{{ dateCreated }}</td>
            <td>
                <button @click="editMusic(id)">Edit</button>
                <button @click="deleteMusic(id)">DELETE</button>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapActions } from 'vuex'
import { APIHobby } from '@/api/APIHobby.js'
const api = new APIHobby()
export default {
    name: "AdminMusicList",
    data () {
        return {
            error: {
                status: false,
                message: ''
            },
            success: {
                status: false,
                message: ''
            }
        }
    },

    computed: {
        ...mapGetters($hobbies, [
            'hobbyMusic',
        ])
    },

    methods: {
        ...mapActions($hobbies, [
            'getMusicList'
        ]),

        editMusic (id) {
            api.editMusic(id)
        },

        deleteMusic (id) {
            api.deleteMusic(id)
                .then(() => {
                    this.success.status = true
                    this.success.message = 'Successfully deleted'
                    this.getMusicList()
                })
                .catch(err => {
                    // eslint-disable-next-line
                    console.error(err)
                    this.error.status = true
                    this.error.message = 'Error deleting music'
                })
        }
    },
    created () {
        this.getMusicList()
    }
}
</script>

<style>

</style>

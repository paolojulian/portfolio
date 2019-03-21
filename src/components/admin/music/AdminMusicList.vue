<template>
<div class="AdminMusicList">
    <table>
        <tr v-for="({ name, audio_path, dateCreated, id }) in hobbyMusic.list"
            :key="id"
        >
            <td>{{ id }}</td>
            <td>
                <span v-if="id === editing.id">
                    <input type="text"
                        v-model="editing.name"
                        />
                </span>
                <span v-else>
                    {{ name }}
                </span>
            </td>
            <td>{{ audio_path }}</td>
            <td>{{ dateCreated }}</td>
            <td>
                <button @click="submitEdit()"
                    v-if="id === editing.id"
                >
                    Finish Edit
                </button>
                <button @click="toggleEdit()"
                    v-if="id === editing.id"
                >
                    Cancel Edit
                </button>
                <button @click="toggleEdit(id, name)"
                    v-else
                >
                    Edit
                </button>
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
            editing: {
                id: '',
                name: ''
            },
            CODES: {
                UPDATE: 1092,
                DELETE: 1093
            },
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
            'getMusicList',
        ]),

        toggleEdit (id = null, name = null) {
            this.editing.id = id
            this.editing.name = name
        },

        submitEdit () {
            const { id, name } = this.editing
            api.updateMusic(id, { name })
                .then(() => this.handleSuccess(this.CODES.UPDATE))
                .catch(err => this.handleError(err, this.CODES.DELETE))
        },

        deleteMusic (id) {
            api.deleteMusic(id)
                .then(() => this.handleSuccess(this.CODES.DELETE))
                .catch(err => this.handleError(err, this.CODES.DELETE))
        },

        handleSuccess (code) {
            this.success.status = true
            this.getMusicList()

            switch (code) {
                case this.CODES.UPDATE:
                    this.success.message = 'Successfully updated music'
                    this.toggleEdit()
                    break;
                case this.CODES.DELETE:
                    this.success.message = 'Successfully deleted music'
                    break;
                default:
                    break;
            }

            setTimeout(() => {
                this.success.status = false
                this.success.message = ''
            }, 5000)
        },

        handleError (err, code) {
            // eslint-disable-next-line
            console.error(err)
            this.error.status = true

            switch (code) {
                case this.CODES.UPDATE:
                    this.success.message = 'Error updating music'
                    break;
                case this.CODES.DELETE:
                    this.success.message = 'Error deleting music'
                    break;
                default:
                    break;
            }

            setTimeout(() => {
                this.error.status = false
                this.error.message = ''
            }, 5000)
        }
    },
    created () {
        this.getMusicList()
    }
}
</script>

<style>

</style>

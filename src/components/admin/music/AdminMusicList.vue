<template>
<div class="AdminMusicList">
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Artist</th>
            <th>Audio Path</th>
            <th class="big-screen-only">Date Created</th>
            <th>Action</th>
        </tr>
        <tr v-for="({ name, artist, audio_path, dateCreated, id }) in hobbyMusic.list"
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
            <td>{{ artist }}</td>
            <td>{{ audio_path }}</td>
            <td class="big-screen-only">{{ dateCreated | convertDateTime }}</td>
            <td>
                <AdminButton
                    v-if="id === editing.id"
                    @click="submitEdit()"
                    type="ok"
                    :fab="true"
                    size="1.5rem"
                    background-color="var(--my-parsley)"
                    color="#ffffff"
                />
                <AdminButton
                    v-if="id === editing.id"
                    @click="toggleEdit()"
                    type="cancel"
                    :fab="true"
                    size="1.5rem"
                    background-color="var(--my-paprika)"
                    color="#ffffff"
                />
                <AdminButton
                    v-else
                    @click="toggleEdit(id, name)"
                    type="edit"
                    :fab="true"
                    background-color="#212121"
                    color="#ffffff"
                />
                <AdminButton
                    @click="deleteMusic(id)"
                    type="delete"
                    :fab="true"
                />
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

<style scoped>
.AdminMusicList {
    margin: 2rem 0;
    font-size: 0.8rem;
}
</style>

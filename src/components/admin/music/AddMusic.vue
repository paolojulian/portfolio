<template>
<div class="AddMusic"
    data-test="admin music add"
>
    AddMusic
    <input data-test="music form name"
        type="text"
        v-model="form.name"
    />
    <input data-test="music form artist"
        type="text"
        v-model="form.artist"
    />
    <input data-test="music form file"
        type="file"
        ref="musicFile"
        @change="handleFileUpload"
    />

    <button data-test="music form submit"
        @click="submitForm"
    >
        SUBMIT
    </button>
</div>
</template>

<script>
import axios from 'axios'
const URL = require('../../../api/APIRoutes.js')
class MusicForm {
    constructor () {
        this.name = ''
        this.artist = ''
        this.file = null
    }
}
export default {
    name: 'AddMusic',
    data () {
        return {
            form: new MusicForm(),
            error: false
        }
    },

    methods: {
        submitForm () {
            return this.resetForm()
            this.error = false
            let form = new FormData()
            form.append('name', this.form.name)
            form.append('artist', this.form.artist)
            form.append('file', this.form.file)
            axios
                .post(
                    URL.music.add,
                    form,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                .then(this.handleSuccess)
                .catch(this.handleError)
        },

        handleSuccess (response) {
            this.resetForm()
        },

        handleError (error) {
            // eslint-disable-next-line
            console.error(error)
            this.error = true
        },

        resetForm () {
            this.$refs.musicFile.value = null
            this.form = new MusicForm()
        },
        
        handleFileUpload (event) {
            this.form.file = event.target.files[0]
            if (this.form.name.trim() === '') {
                this.form.name = this.form.file.name
            }
            return true
        }
    }
}
</script>

<style scoped>

</style>

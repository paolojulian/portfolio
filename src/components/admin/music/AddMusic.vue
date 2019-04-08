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
class MusicForm {
    constructor () {
        this.name = ''
        this.artist = ''
        this.audioPath = ''
    }
}
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex'
export default {
    name: 'AddMusic',
    data () {
        return {
            form: new MusicForm(),
            error: false,
            audioPath: null,
            errors: {
                unableToUpload: {
                    code: 321312319,
                    status: false,
                    message: ''
                },
                unableToAddMusic: {
                    code: 321312320,
                    status: false,
                    message: ''
                }
            }
        }
    },

    methods: {
        ...mapActions($hobbies, [
            'getMusicList',
            'addMusic',
            'uploadAudio'
        ]),

        uploadAudioAndGetPath () {
            let form = new FormData();
            form.append('file', this.file);
            form.append('name', this.form.name);

            return this.uploadAudio(form)
                .then(response => {
                    this.form.audioPath = response.audioPath
                })
                .catch(err => { throw err })
        },

        async submitForm () {
            try {
                // get audio path first before adding to database
                await this.uploadAudioAndGetPath();
                // add data to database
                // this.addMusic(this.form)
                //     .then(this.handleSuccess)
                //     .catch(err => { throw err });
            } catch (err) {
                //eslint-disable-next-line
                console.error(err);
                this.handleError(this.errors.unableToAddMusic.code);
            }
        },

        handleSuccess () {
            alert('Success');
            this.resetForm();
            this.getMusicList();
        },

        handleError (errorCode) {
            // showError
            let showError = (index, message) => {
                this.error = true
                index.status = true;
                index.message = message;

                const ERROR_DURATION = 5000; // 5 seconds
                setTimeout(() => {
                    this.error = false
                    index.status = false;
                    index.message = '';
                }, ERROR_DURATION);
            }

            switch (errorCode) {
                case this.errors.unableToUpload.code:
                    showError(this.errors.unableToUpload, 'Unable to upload audio file');
                    break;
                
                case this.errors.unableToAddMusic.code:
                    showError(this.errors.unableToAddMusic, 'Unable to add music');
                    break;

                default:
                    alert('Error');
                    break;
            }
        },

        resetForm () {
            this.$refs.musicFile.value = null
            this.form = new MusicForm()
        },

        handleFileUpload (event) {
            this.file = event.target.files[0]
            if (this.form.name.trim() === '') {
                this.form.name = this.file.name
            }
            return true
        }
    }
}
</script>

<style scoped>

</style>

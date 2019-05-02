<template>
<div class="AddProject">
    <div v-if="status.success">
        {{ status.msg }}
    </div>
    <div v-if="status.error">
        {{ status.msg }}
    </div>
    <br />
    <form @submit.prevent="handleSubmit">
        <div class="project_image">
            <label>Image: </label>
            <input
                type="file"
                ref="imageFile"
                @change="handleFileUpload"
                data-test="project form image"
                />
        </div>

        <div class="project_name">
            <label>Name: </label>
            <input
                type="text"
                v-model="form.name"
                data-test="project form name"
                />
        </div>

        <div class="project_description">
            <label>Description: </label>
            <textarea
                type="text"
                v-model="form.description"
                data-test="project form description"
            ></textarea>
        </div>

        <div class="project_tool">
            <label>Tool used: </label>
            <input
                type="text"
                v-model="form.tool"
                data-test="project form tool"
                />
        </div>

        <div class="project_existing">
            <label>Does exist: </label>
            <input type="checkbox"
                v-model="form.existing"
                data-test="project form existing"
            />
        </div>

        <div class="project_type">
            <label>Project Type: </label>
            <select
                v-model="form.projectType"
                data-test="project form projectType"
            >
                <option :value="null">Choose one</option>
                <option value="1">Personal</option>
                <option value="2">Company</option>
            </select>
        </div>
        
        <button
            @click="resetForm"
            data-test="project form submit">
            Reset
        </button>
        <button
            type="submit"
            data-test="project form submit">
            SUBMIT
        </button>
    </form>
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex';
export default {
    name: 'AddProject',
    data () {
        return {
            status: {
                error: false,
                success: false,
                msg: '',
                codes: {
                    addProject: 3219,
                    incompleteForm: 321
                }
            },
            file: null,
            form: {
                name: '',
                description: '',
                tool: '',
                existing: false,
                projectType: null,
                imagePath: ''
            }
        }
    },
    
    methods: {
        ...mapActions($hobbies, [
            'addProject',
            'getProjects',
            'uploadImage'
        ]),

        resetForm () {
            this.form.name = ''
            this.form.description = ''
            this.form.tool = ''
            this.form.existing = false
            this.form.projectType = null
            this.$refs.imageFile.value = null
        },

        uploadImageAndGetPath () {
            const form = new FormData();
            form.append('file', this.file);
            form.append('name', this.form.name);

            return this.uploadImage(form)
                .then(response => response.imagePath)
                .then(imagePath => {
                    this.form.imagePath = imagePath
                })
                .catch(err => { throw err })
        },

        async handleSubmit () {
            try {
                // get image path first before saving
                await this.uploadImageAndGetPath();

                this.addProject(this.form)
                    .then(() => this.handleSuccess(this.status.codes.addProject))
                    .catch(err => { throw err })

            } catch (err) {
                this.handleError(this.status.codes.addProject, err);
            }

        },
        /**
         * Handles the success function for all actions
         */
        handleSuccess (statusCode) {
            switch (statusCode) {
                case this.status.codes.addProject:
                    this.SET_STATUS('success', 'Project Added Successfully')
                    // Reset the form
                    this.resetForm()
                    // Gets all projects again
                    this.getProjects()
                    break;
                default:
                    break;
            }
        },
        /**
         * Handles the errors for all actions
         * @param { Number } statusCode - the code of the action
         * @param { Object }
         */
        handleError (statusCode, err = {}) {
            if (err) {
                // eslint-disable-next-line
                console.error(err)
            }
            switch (statusCode) {
                case this.status.codes.addProject:
                    this.SET_STATUS('error', 'Unable to add project')
                    break;
                
                case this.status.codes.incompleteForm:
                    this.SET_STATUS('error', 'Please fill in the missing fields')
                    break;
                default:
                    this.SET_STATUS('error', 'Oops! Something went wrong. Please try again later')
                    break;
            }
        },
        /**
         * Handles the file upload
         * @param { Event } event - event from html
         */
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

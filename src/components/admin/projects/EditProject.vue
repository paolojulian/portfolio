<template>
<VModal class="EditProject"
    @close="$emit('close')"
    data-test="project update modal"
>
    <div slot="header"
        class="view-recipe-header"
    >
        Edit project - ({{ name }})
    </div>
    <div slot="body">
        <form @submit.prevent="handleSubmit"
            ref="editProjectForm"
        >
            <div class="project_name">
                <label>Name: </label>
                <input
                    type="text"
                    v-model="form.name"
                    data-test="project update name"
                    />
            </div>

            <div class="project_description">
                <label>Description: </label>
                <textarea
                    type="text"
                    v-model="form.description"
                    data-test="project update description"
                ></textarea>
            </div>

            <div class="project_tool">
                <label>Tool used: </label>
                <input
                    type="text"
                    v-model="form.tool"
                    data-test="project update tool"
                    />
            </div>

            <div class="project_existing">
                <label>Does exist: </label>
                <input type="checkbox"
                    v-model="form.existing"
                    data-test="project update existing"
                />
            </div>

            <div class="project_type">
                <label>Project Type: </label>
                <select
                    v-model="form.projectType"
                    data-test="project update projectType"
                >
                    <option :value="null">Choose one</option>
                    <option value="1">Personal</option>
                    <option value="2">Company</option>
                </select>
            </div>
            
            <button
                type="submit"
                data-test="project update submit"
            >
                SUBMIT
            </button>
        </form>
    </div>
</VModal>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex';
import { BlankFieldException } from '@/exceptions/formExceptions.js'
export default {
    name: 'EditProject',
    props: {
        /**
         * Primary key of the project
         */
        id: {
            type: Number,
            required: true
        },
        /**
         * Name of the project
         */
        name: {
            type: String,
            required: true
        },
        /**
         * The description of the project made
         */
        description: {
            type: String,
            required: true
        },
        /**
         * The tool used in creating the project
         */
        tool: {
            type: String,
            required: true
        },
        /**
         * If project exists and available to be seen online [0: false, 1: true]
         */
        existing: {
            type: Number,
            required: true
        },
        /**
         * The type if a [1:Personal or 2:Company] project
         */
        projectType: {
            type: Number,
            required: true
        },
    },

    data () {
        return {
            form: {
                name: this.name,
                description: this.description,
                tool: this.tool,
                existing: this.existing,
                projectType: this.projectType
            },
            status: {
                error: false,
                success: true,
                codes: {
                    editProjectSuccess: 321,
                    editProjectError: 322,
                    blankFields: 100
                }
            }
        }
    },

    methods: {
        ...mapActions($hobbies, [
            'getProjects',
            'editProject'
        ]),
        /**
         * Handles the submition of edit project
         */
        handleSubmit () {
            this.validateForm()
            this.form.existing = this.form.existing
                ? 1
                : 0

            const payload = {
                projectID: this.id,
                data: this.form
            }
            this.editProject(payload)
                .then(() => this.handleSuccess(this.status.codes.editProjectSuccess))
                .catch(err => this.handleError(this.status.codes.editProjectError, err))
        },
        /**
         * Checks for errors in the form inside edit project
         */
        validateForm () {
            try {
                this.checkBlankFields()
            } catch (err) {
                if (err.name == 'BlankFieldException') {
                    this.handleError(this.status.codes.blankFields, err)
                }
                this.handleError()
            }
        },
        checkBlankFields () {
            let blankFields = []
            if (this.form.name.trim() === '') {
                blankFields = this.form.name
            }
            if (blankFields.length > 0) {
                throw new BlankFieldException(blankFields)
            }
        },
        /**
         * Handles the successful actions
         * @param { Number } statusCode - name of the successful action
         */
        handleSuccess (statusCode) {
            switch(statusCode) {
                case this.status.codes.editProjectSuccess:
                    this.SET_STATUS('success', `Successfully updated the project ${this.form.name}`)
                    this.getProjects()
                    this.$emit('close')
                    break;
                default:
                    break;
            }
        },
        handleError (statusCode = 0, err = {}) {
            if (err) {
                // eslint-disable-next-line
                console.error(err)
            }

            switch(statusCode) {
                case this.status.codes.blankFields:
                    alert(err.message);
                    break;
                default:
                    alert('Oops!, Something went wrong')
                    break;
            }

        }
    }
}
</script>

<style scoped>

</style>

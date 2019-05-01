<template>
<div class="AdminProjectList"
    data-test="project list"
>
    <div v-if="this.status.success">
        {{ this.status.msg }}
    </div>
    <div v-if="this.status.error">
        {{ this.status.msg }}
    </div>
    <table
        data-test="project table"
    >
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Tool</th>
            <th>Existing</th>
            <th>ProjectType</th>
            <th>Actions</th>
        </tr>

        <tr v-for="({ id, name, description, tool, imagePath, existing, projectType }) in projectList"
            :data-test="`project table row-${id}`"
            :key="id"
        >
            <td data-test="project table id">{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ description | filterDescription }}</td>
            <td>{{ tool }}</td>
            <td>{{ existing | filterExisting }}</td>
            <td>{{ projectType | filterProjectType }}</td>
            <td>
                <AdminButton
                    @click="handleDeleteProject(id, imagePath)"
                    data-test="project table delete"
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
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'AdminProjectList',
    filters: {
        filterDescription: (description) => {
            return description.length > 10
                ? description.slice(0, 10) + '...'
                : description
        },
        filterExisting: (existing) => {
            try {
                return Number(existing) == 1
                    ? 'True'
                    : 'False'
            } catch (err) {
                // eslint-disable-next-line
                console.error(err)
                return ''
            }
        },
        filterProjectType: (projectType) => {
            try {
                return Number(projectType) == 1
                    ? 'Personal'
                    : 'Company'
            } catch (err) {
                // eslint-disable-next-line
                console.error(err)
                return ''
            }
        }
    },

    data () {
        return {
            status: {
                codes: {
                    deleteSuccess: 122,
                    deleteError: 222
                },
                error: false,
                success: false,
                msg: ''
            }
        }
    },

    computed: {
        ...mapGetters($hobbies, [
            'projectList'
        ])
    },

    methods: {
        ...mapActions($hobbies, [
            'getProjects',
            'deleteProject'
        ]),
        /**
         * DELETE A SINGLE PROJECT
         * @param { Number } projectID - pk of the project
         * @param { String } imagePath - the link of the image of the project
         */
        handleDeleteProject (projectID, imagePath) {
            const key = this.CONVERT_S3_LINK_TO_KEY(imagePath)
            this.deleteProject({ projectID, key })
                .then(() => this.handleSuccess(this.status.codes.deleteSuccess))
                .catch(err => this.handleError(this.status.codes.deleteError, err))
        },
        /**
         * SETS THE STATUS OF THE ACTION if[Success or Error]
         * @param { String } type - [success|error]
         * @param { String } msg - message of the status - to be displayed on screen
         */
        setStatus (type, msg) {
            if (!this.status.hasOwnProperty(type)) {
                // eslint-disable-next-line
                console.error('TYPEERROR Wrong (type) given: ' + type + '\nShould equal to [success or error] only')
            }
            this.status[type] = true
            this.status.msg = msg
            setTimeout(() => {
                this.status[type] = false
                this.status.msg = ''
            }, 5000)
        },
        /**
         * HANDLES ALL SUCCESS ACTION
         * @param { Number } statusCode - status code of the success
         */
        handleSuccess (statusCode) {
            switch (statusCode) {
                case this.status.codes.deleteSuccess:
                    this.getProjects()
                    this.setStatus('success', 'Project was successfully deleted!')
                    break;
                default:
                    break;
            }
        },
        /**
         * HANDLES ALL ERROR ACTIONS
         * @param { Number } statusCode - status code of the error
         * @param { Any } err - error passed
         */
        handleError (statusCode, err = {}) {
            if (err) {
                // eslint-disable-next-line
                console.error(err)
            }

            switch (statusCode) {
                case this.status.codes.deleteError:
                    this.setStatus('error', 'Unable to delete project')
                    break;
                default:
                    break;
            }
        }

    },

    created () {
        this.getProjects()
    }
}
</script>

<style scoped>

</style>

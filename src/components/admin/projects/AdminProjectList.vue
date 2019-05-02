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
                    @click="handleEditProject({ id, name, description, tool, existing, projectType })"
                    :data-test="`project table update-${id}`"
                    type="edit"
                    :fab="true"
                    background-color="#212121"
                    color="#ffffff"
                />
                <AdminButton
                    @click="handleDeleteProject(id, imagePath)"
                    :data-test="`project table delete-${id}`"
                    type="delete"
                    :fab="true"
                />
            </td>
        </tr>
    </table>
    <EditProject
        v-if="modal.editProject.toggle"
        @close="CLOSE_MODAL('editProject')"
        :id="Number(modal.editProject.data.id)"
        :name="modal.editProject.data.name"
        :description="modal.editProject.data.description"
        :tool="modal.editProject.data.tool"
        :existing="Number(modal.editProject.data.existing)"
        :project-type="Number(modal.editProject.data.projectType)"
    />
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'AdminProjectList',
    components: {
        EditProject: () => import('./EditProject')
    },
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
            },
            modal: {
                editProject: {
                    toggle: false,
                    data: null
                }
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
         * Handles the editing per project
         * @param { Object } project - the project to be edited
         */
        handleEditProject (project) {
            this.modal.editProject.data = project
            // from src/helpers/mixins.js
            this.OPEN_MODAL('editProject')
        },
        /**
         * HANDLES ALL SUCCESS ACTION
         * @param { Number } statusCode - status code of the success
         */
        handleSuccess (statusCode) {
            switch (statusCode) {
                case this.status.codes.deleteSuccess:
                    this.getProjects()
                    this.SET_STATUS('success', 'Project was successfully deleted!')
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
                    this.SET_STATUS('error', 'Unable to delete project')
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

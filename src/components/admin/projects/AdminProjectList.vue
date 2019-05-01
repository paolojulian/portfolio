<template>
<div class="AdminProjectList">
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

        <tr v-for="({ id, name, description, tool, imageName, existing, projectType }) in projectList"
            :key="id"
        >
            <td data-test="project list id">{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ description | filterDescription }}</td>
            <td>{{ tool }}</td>
            <td>{{ existing | filterExisting }}</td>
            <td>{{ projectType | filterProjectType }}</td>
            <td></td>
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
    computed: {
        ...mapGetters($hobbies, [
            'projectList'
        ])
    },
    methods: {
        ...mapActions($hobbies, [
            'getProjects'
        ])
    },

    created () {
        this.getProjects()
    }
}
</script>

<style scoped>

</style>

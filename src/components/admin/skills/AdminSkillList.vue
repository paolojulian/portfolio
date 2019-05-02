<template>
<div data-test="skills list"
    class="AdminSkillList"
>
    <table data-test="skills table">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Level</th>
            <th>Type</th>
            <th>Actions</th>
        </tr>
        <tr v-for="{id, name, level, type} in skillList"
            :data-test="`skills table row-${id}`"
            :key="id"
        >
            <td data-test="skills table id">{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ level }}</td>
            <td>{{ type | skillType }}</td>
            <td>
                <AdminButton
                    @click="handleEditSkill({ id, name, level, type })"
                    :data-test="`skills table update-${id}`"
                    type="edit"
                    :fab="true"
                    background-color="#212121"
                    color="#ffffff"
                />
                <AdminButton
                    @click="handleDeleteSkill(id)"
                    :data-test="`skills table delete-${id}`"
                    type="delete"
                    :fab="true"
                />
            </td>
        </tr>
    </table>
    <EditSkill
        v-if="modal.editSkill.toggle"
        @close="CLOSE_MODAL('editSkill')"
        @success="handleSuccess(codes.successEdit)"
        :id="Number(modal.editSkill.id)"
        :name="modal.editSkill.name"
        :level="Number(modal.editSkill.level)"
        :type="Number(modal.editSkill.type)"
    />
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'AdminSkillList',
    components: {
        EditSkill: () => import('./EditSkill.vue')
    },

    computed: {
        ...mapGetters($hobbies, [
            'skillList'
        ])
    },

    data () {
        return {
            modal: {
                editSkill: {
                    toggle: false,
                    id: 0,
                    name: '',
                    level: 0,
                    type: 1
                }
            },
            codes: {
                successEdit: 5,
                successDelete: 6,

                errorEdit: 2,
                errorDelete: 3
            }
        }
    },

    methods: {
        ...mapActions($hobbies, [
            'getSkillList',
            'deleteSkill',
            'setStatus',
        ]),

        handleEditSkill ({ id, name, level, type }) {
            this.modal.editSkill.id = id
            this.modal.editSkill.name = name
            this.modal.editSkill.level = level
            this.modal.editSkill.type = type
            this.modal.editSkill.toggle = true
        },

        handleDeleteSkill (id) {
            this.deleteSkill(id)
                .then(() => this.handleSuccess(this.codes.successDelete, id))
                .catch(err => this.handleError(this.codes.errorDelete, err))
        },
        /**
         * Handles the success function for all actions
         */
        handleSuccess (statusCode, ...params) {
            switch (statusCode) {
                case this.codes.successEdit:
                    this.getSkillList()
                    this.CLOSE_MODAL('editSkill')
                    this.setStatus({ type: 'success', msg: `Successfully updated ID ${this.modal.editSkill.id}` })
                    break;
                case this.codes.successDelete:
                    this.setStatus({ type: 'success', msg: `Successfully deleted ID: ${params[0]}` })
                    this.getSkillList()
                    break;
                default:
                    this.setStatus({ type: 'error', msg: 'Oops! Something went wrong. Please try again later' })
                    break;
            }
            
        },
        /**
         * Handles the errors for all actions
         * @param { Number } statusCode - the code of the action
         * @param { Object }
         */
        handleError (statusCode = {}, err = {}) {
            if (err) {
                // eslint-disable-next-line
                console.error(err)
            }
            switch (statusCode) {
                case this.codes.errorEdit:
                    this.setStatus({ type: 'error', msg: 'Unable to update data' })
                    break;
                case this.codes.errorDelete:
                    this.setStatus({ type: 'error', msg: 'Unable to delete data' })
                    break;
                default:
                    this.setStatus({ type: 'error', msg: 'Oops! Something went wrong. Please try again later' })
                    break;
            }
        },
    },

    filters: {
        skillType: type => {
            return type == '1'
                ? 'Programming Language'
                : 'Framework / Others'
        }
    },

    created () {
        this.getSkillList()
    }
}
</script>

<style scoped>

</style>

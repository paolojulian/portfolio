<template>
<div class="AdminRecipeList">
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
            <th class="big-screen-only">Date Created</th>
            <th>Actions</th>
        </tr>
        <tr v-for="{ id, name, duration_from, duration_to, dateCreated } in hobbyCooking.list"
            :key="id"
        >
            <td>{{ id }}</td>

            <template v-if="id === editing.id">
                <td>
                    <input type="text" v-model="editing.name" />
                </td>
                <td class="recipe-table-duration">
                    <input type="text" v-model="editing.duration_from"/>
                    -
                    <input type="text" v-model="editing.duration_to"/>
                </td>
            </template>
            <template v-else>
                <td>{{ name }}</td>
                <td>{{ duration_from }} - {{ duration_to }}</td>
            </template>

            <td class="big-screen-only">{{ dateCreated | convertDateTime }}</td>
            <td>
                <AdminButton
                    @click="viewRecipe(id)"
                    type="bookOpen"
                    :fab="true"
                    background-color="#ffffff"
                    color="#131313"
                />
                <AdminButton
                    v-if="id === editing.id"
                    @click="submitEditInfo()"
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
                    @click="toggleEdit({ id, name, duration_from, duration_to })"
                    type="edit"
                    :fab="true"
                    background-color="#212121"
                    color="#ffffff"
                />
                <AdminButton
                    @click="deleteRecipe(id)"
                    type="delete"
                    :fab="true"
                />
            </td>
        </tr>
    </table>
    <ViewRecipe v-if="modal.viewRecipe.toggle"
        :recipe-id="modal.viewRecipe.id"
        @close="closeViewRecipe()"
    />
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapActions } from 'vuex'

const editing = {
    id: null,
    name: '',
    duration_from: 5,
    duration_to: 5,
}
export default {
    name: 'AdminRecipeList',

    components: {
        ViewRecipe: () => import('./ViewRecipe.vue')
    },

    data () {
        return {
            editing: { ...editing },
            modal: {
                viewRecipe: {
                    toggle: false,
                    id: null
                }
            },
            statusCodes: {
                editInfo: 2059
            }
        }
    },

    computed: {
        ...mapGetters($hobbies, [
            'hobbyCooking'
        ])
    },

    methods: {
        ...mapActions($hobbies, [
            'getHobbyCooking',
            'updateRecipeInfo'
        ]),

        viewRecipe (id) {
            this.modal.viewRecipe.id = id
            this.modal.viewRecipe.toggle = true
        },

        closeViewRecipe () {
            this.modal.viewRecipe.id = null
            this.modal.viewRecipe.toggle = false
        },

        toggleEdit (data = null) {
            if ( ! data) return this.editing = { ...editing };

            let { id, name, duration_from, duration_to } = data
            this.editing.id = id
            this.editing.name = name
            this.editing.duration_from = duration_from
            this.editing.duration_to = duration_to
        },

        submitEditInfo () {
            this.updateRecipeInfo({ ...this.editing })
                .then(() => this.handleSuccess(this.statusCodes.editInfo))
                .catch(() => this.handleError(this.statusCodes.editInfo))
        },

        deleteRecipe (id) {
            alert(id)
        },

        handleSuccess (statusCode) {
            switch (statusCode) {
                case this.statusCodes.editInfo:
                    this.toggleEdit()
                    this.getHobbyCooking()
                    alert('Success')
                    break;
                default:
                    break;
            }
        },

        handleError (statusCode) {
            switch (statusCode) {
                case this.statusCodes.editInfo:
                    alert('Failed')
                    break;
                default:
                    break;
            }
        }
    },

    created () {
        this.getHobbyCooking()
    }
}
</script>

<style scoped>
.AdminRecipeList {
    margin: 2rem 0;
}
.recipe-table-duration input{
    width: 2rem;
}
</style>

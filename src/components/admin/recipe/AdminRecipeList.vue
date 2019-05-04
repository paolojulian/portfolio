<template>
<div class="AdminRecipeList">
    <table
        data-test="recipe table"
    >
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
            <th class="big-screen-only">Date Created</th>
            <th>Actions</th>
        </tr>
        <tr v-for="{ id, name, duration_from, duration_to, dateCreated, image_path } in hobbyCooking.list"
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
                    @click="viewRecipe(id, name)"
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
                    @click="handleEditRecipe(id)"
                    data-test="recipe table update"
                    type="edit"
                    :fab="true"
                    background-color="#ffffff"
                    color="#212121"
                />
                <AdminButton
                    @click="deleteRecipeAndRemoveImage(id, image_path)"
                    type="delete"
                    :fab="true"
                />
            </td>
        </tr>
    </table>
    <ViewRecipe v-if="modal.viewRecipe.toggle"
        :recipe-id="modal.viewRecipe.id"
        :recipe-name="modal.viewRecipe.name"
        @close="closeViewRecipe()"
    />
    <EditRecipe
        v-if="modal.editRecipe.toggle"
        :recipe-id="modal.editRecipe.id"
        @close="CLOSE_MODAL('editRecipe')"
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
        ViewRecipe: () => import('./ViewRecipe.vue'),
        EditRecipe: () => import('./EditRecipe.vue'),
    },

    data () {
        return {
            editing: { ...editing },
            modal: {
                viewRecipe: {
                    toggle: false,
                    id: null
                },
                editRecipe: {
                    toggle: false,
                    id: null
                }
            },
            statusCodes: {
                editInfo: 2059,
                deleteRecipe: 209,
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
            'updateRecipeInfo',
            'deleteRecipe'
        ]),

        viewRecipe (id, name) {
            this.modal.viewRecipe.id = Number(id)
            this.modal.viewRecipe.name = name
            this.modal.viewRecipe.toggle = true
        },

        handleEditRecipe (id) {
            this.modal.editRecipe.toggle = true
            this.modal.editRecipe.id = id
        },

        closeViewRecipe () {
            this.modal.viewRecipe.id = null
            this.modal.viewRecipe.name = ''
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

        deleteRecipeAndRemoveImage (recipeID, image_path) {
            // Get the key of the image
            const image_path_arr = image_path.split('/')
            const key = image_path_arr[image_path_arr.length - 1]

            this.deleteRecipe({ recipeID, key })
                .then(() => this.handleSuccess(this.statusCodes.deleteRecipe))
                .catch(err => this.handleError(this.statusCodes.deleteRecipe, err))
        },

        handleSuccess (statusCode) {
            switch (statusCode) {
                case this.statusCodes.editInfo:
                    this.toggleEdit()
                    this.getHobbyCooking()
                    alert('Success')
                    break;
                case this.statusCodes.deleteRecipe:
                    this.getHobbyCooking()
                    alert('Success')
                    break;
                default:
                    break;
            }
        },

        handleError (statusCode, err = '') {
            if (err) {
                // eslint-disable-next-line
                console.error(err)
            }
            switch (statusCode) {
                case this.statusCodes.editInfo:
                    alert('Failed')
                    break;
                default:
                    alert('Failed')
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

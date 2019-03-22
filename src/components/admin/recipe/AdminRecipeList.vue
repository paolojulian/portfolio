<template>
<div class="AdminRecipeList">
    AdminRecipeList
    <table>
        <tr v-for="{ id, name, duration_from, duration_to, dateCreated } in hobbyCooking.list"
            :key="id"
        >
            <td>{{ id }}</td>

            <template v-if="id === editing.id">
                <td>
                    <input type="text" v-model="editing.name"/>
                </td>
                <td>
                    <input type="text" v-model="editing.duration_from"/>
                </td>
                <td>
                    <input type="text" v-model="editing.duration_to"/>
                </td>
            </template>
            <template v-else>
                <td>{{ name }}</td>
                <td>{{ duration_from }}</td>
                <td>{{ duration_to }}</td>
            </template>

            <td>{{ dateCreated }}</td>
            <td>
                <button @click="submitEdit()"
                    v-if="id === editing.id"
                >
                    Finish Edit
                </button>
                <button @click="toggleEdit()"
                    v-if="id === editing.id"
                >
                    Cancel Edit
                </button>
                <button @click="toggleEdit({ id, name, duration_from, duration_to })"
                    v-else
                >
                    Edit
                </button>
                <button @click="deleteRecipe(id)">DELETE</button>
            </td>
        </tr>
    </table>
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

    data () {
        return {
            editing: { ...editing }
        }
    },

    computed: {
        ...mapGetters($hobbies, [
            'hobbyCooking'
        ])
    },

    methods: {
        ...mapActions($hobbies, [
            'getHobbyCooking'
        ]),

        toggleEdit (data = null) {
            if ( ! data) return this.editing = { ...editing };

            let { id, name, duration_from, duration_to } = data
            this.editing.id = id
            this.editing.name = name
            this.editing.duration_from = duration_from
            this.editing.duration_to = duration_to
        },

        submitEdit () {

        },

        deleteRecipe (id) {

        }
    },

    created () {
        this.getHobbyCooking()
    }
}
</script>

<style>
.AdminRecipeList {
    padding: 1rem;
}
</style>

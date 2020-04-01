<template>
<div class="AdminRecipe"
    data-test="recipe"
>
    <AddRecipe
        v-if="modal.add_recipe.toggle"
        @close="closeModal('add_recipe')"
    />

    <div class="status_success"
        v-if="adminStatus.success"
    >
        {{ adminStatus.msg }}
    </div>
    <div class="status_error"
        v-if="adminStatus.error"
    >
        {{ adminStatus.msg }}
    </div>

    <div class="adm-search-bar">
        <AdminButton
            @click="openModal('add_recipe')"
            type="plus"
            :fab="true"
            background-color="#ffffff"
            color="#131313"
        />
    </div>

    <AdminRecipeList />
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
library.add( faPlus, faMinus )

export default {
    name: 'AdminRecipe',
    components: {
        AddRecipe: () => import('./AddRecipe.vue'),
        AdminRecipeList: () => import('./AdminRecipeList.vue')
    },
    data () {
        return {
            modal: {
                add_recipe: {
                    toggle: false
                }
            }
        }
    },

    methods: {
        openModal(modal_name) {
            if ( ! this.modal.hasOwnProperty(modal_name)) return;
            this.modal[modal_name].toggle = true
        },

        closeModal(modal_name) {
            if ( ! this.modal.hasOwnProperty(modal_name)) return;
            this.modal[modal_name].toggle = false
        }
    },

    computed: {
        ...mapGetters($hobbies, [
            'adminStatus'
        ])
    }
}
</script>

<style scoped>
.adm-search-bar {
    width: 100%;
    padding: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
    text-align: center;
}
</style>

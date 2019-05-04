<template>
<div class="AdminRecipe"
    data-test="recipe"
>
    <AddRecipe />

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

    <!-- =========== HR ================ -->
    <br />
    <hr />
    <br />
    <!-- =========== HR ================ -->

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
    computed: {
        ...mapGetters($hobbies, [
            'adminStatus'
        ])
    }
}
</script>

<style scoped>

</style>

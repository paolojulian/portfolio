<template>
<div class="AdminRecipe">
    AdminRecipe
    <AddRecipe/>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
library.add( faPlus, faMinus )

export default {
    name: 'AdminRecipe',
    components: {
        AddRecipe: () => import('./AddRecipe.vue')
    },
}
</script>

<style scoped>

</style>

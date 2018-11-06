<template lang="html">
<VModal id="viewRecipe"
    modal-type="alert"
    @submit="closeHobbyModal"
>
    <div slot="header">
        {{ viewRecipe.name }}
    </div>
    <div slot="body">
        <ol>
            <li v-for="viewRecipe.mainIngredients">
                {{ viewRecipe.mainIngedients.name }}
                <ul>
                    <li v-for="viewRecipe.subIngredients"></li>
                </ul>
            </li>
        </ol>
    </div>
</VModal>
</template>

<script type="text/javascript">
import { mapGetters, mapMutations } from 'vuex'
import { $hobby } from '@/helpers/constants'
export default {
    computed: {
        ...mapGetters($hobby, [
            'viewRecipe'
        ])
    },
    methods: {
        ...mapMutations($hobby, [
            'closeHobbyModal'
        ]),
        initialData () {

        }
    },
    created () {
    }
}
</script>

<style scoped>
#viewRecipe {

}
</style>

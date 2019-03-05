<template>
<div class="Admin">
    ADMIN
    <button @click="logout">
        Logout
    </button>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/helpers/constants'
export default {
    computed: {
        ...mapGetters($auth, [
            'isLoggedIn'
        ])
    },

    methods: {
        ...mapActions($auth, [
            'logout'
        ])
    }
}
</script>

<style scoped>

</style>

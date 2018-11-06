<template lang="html">
    <div id="Login">
        <div id="Login__card">
            <VButton @click="processLogin">Test</VButton>
        </div>
    </div>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/helpers/constants'
export default {
    name: 'Login',
    computed: {
        ...mapGetters($auth, [
            'isLoggedIn'
        ])
    },
    methods: {
        ...mapActions($auth, [
            'login'
        ]),
        processLogin () {
            this.login()
                .then(response => {
                })
        }
    }
}
</script>

<style scoped>
@media screen {
    #Login {
        background-color: #22181c;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        overflow: hidden;
    }
}
#Login__card {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ffffff;

    height: 300px;
    width: 100%;
    padding: 30px;
}
</style>

<template lang="html">
<div class="Login">

    <div class="Login__logo">
    </div>

    <div class="Login__form">
        <div class="Login__username">
             <font-awesome-icon icon="user" />
            <input
                type="text"
                v-model="username"
            />
        </div>

        <div class="Login__password">
             <font-awesome-icon icon="lock" />
            <input
                type="password"
                v-model="password"
            />
        </div>

        <button class="btn_login">
            Login
        </button>

        <br />

        <router-link
            :to="{ name: 'Dashboard' }"
            class="btn_home">
            Home
        </router-link>
    </div>

</div>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/helpers/constants'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
library.add( faUser, faLock )

export default {
    name: 'Login',
    data () {
        return {
            username: '',
            password: ''
        }
    },
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
        }
    }
}
</script>

<style scoped>
/* MOBILE */
.Login {
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    text-align: center;
}
.Login__logo {
    width: 100%;
    height: 50%;
    background-image: url('../../assets/img/logo.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
}
.Login__username input,
.Login__password input {
    border-radius: 30px;
    background-color: #c4c4c4;
    margin: 10px;
    border: none;
    font-size: 18px;
    padding: 5px;
    padding-left: 10px;
}
.btn_login,
.btn_home {
    border-radius: 30px;
    color: #ffffff;
    padding-top: 7px;
    padding-bottom: 7px;
    width: 100px;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;

    display: inline-block;
}
.btn_login {
    background-color: var(--my-paprika);
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.btn_home {
    background-color: var(--my-parsley);
}
</style>

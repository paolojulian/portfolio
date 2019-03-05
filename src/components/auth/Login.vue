<template lang="html">
<div class="Login">
    <div class="Login__card">
        <div class="Login__logo">
        </div>

        <div class="Login__form">
            <div class="Login__username">
                <font-awesome-icon icon="user" />
                <input
                    :class="{ 'empty-input': invalidCredentials }"
                    type="text"
                    v-model="credentials.username"
                    @keyup.enter="processLogin"
                />
            </div>

            <div class="Login__password">
                <font-awesome-icon icon="lock" />
                <input
                    :class="{ 'empty-input': invalidCredentials }"
                    type="password"
                    v-model="credentials.password"
                    @keyup.enter="processLogin"
                />
            </div>

            <button
                class="btn_login"
                @click="processLogin"
                v-if=" ! processingLogin"
            >
                Login
            </button>
            <font-awesome-icon
                class="login_spinner"
                v-if="processingLogin"
                icon="spinner"
                spin
            />

            <br />

            <button class="btn_home">
                <router-link
                    :to="{ name: 'Dashboard' }"
                >
                    Home
                </router-link>
            </button>

            <VSpacer />
            <transition name="fade">
                <div
                    class="invalid_credentials"
                    v-if="invalidCredentials"
                >
                    Invalid Username or Password
                </div>
            </transition>

        </div>
    </div>

</div>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/helpers/constants'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock, faSpinner } from '@fortawesome/free-solid-svg-icons'
library.add( faUser, faLock, faSpinner )

export default {
    name: 'Login',
    data () {
        return {
            credentials: {
                username: '',
                password: '',
            },
            processingLogin: false,
            invalidCredentials: false,
            timeoutFunc: null,
            errorTimeout: 5000
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
            this.processingLogin = true
            if (this.timeoutFunc) {
                clearTimeout(this.timeoutFunc)
                this.invalidCredentials = false
                this.timeoutFunc = null
            }
            this.login(this.credentials)
                .catch(() => {
                    this.invalidCredentials = true
                    this.timeoutFunc = setTimeout(this.timeoutCredentials, this.errorTimeout)
                })
                .then(() => {
                    this.processingLogin = false
                })
        },
        timeoutCredentials () {
            this.invalidCredentials = false
            this.timeoutFunc = null
        }
    }
}
</script>

<style scoped>
/* MOBILE */
.Login {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    text-align: center;
}
.Login__card {
    background-color: #ffffff;
    position: relative;
    width: 100%;
    height: 100%;
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

    transition: color 300ms ease-in-out 300ms;
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
.invalid_credentials {
    color: red;
}
.login_spinner {
    margin: 1rem;
}
/* WEB */
@media screen and (min-width: 800px){
    .Login {
        background-color: #eeeeee;
    }
    .Login__card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 375px;
        height: 667px;

        box-shadow: 0 5px 10px #131313;
    }
    .btn_login,
    .btn_home {
        cursor: pointer;
    }
}
</style>

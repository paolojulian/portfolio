import { headers, $auth } from '@/helpers/constants'
import store from '@/store'

const Login = {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login'),
    meta: {
        en_title: headers.en.login,
        navBar: false,
        authRequired: false
    },
    beforeEnter (to, from, next) {
        if (store.getters[$auth + '/isLoggedIn']) {
            next('/')
        } else {
            next()
        }
    }
}

export default [
    Login
]

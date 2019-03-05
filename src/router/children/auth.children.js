import { headers, $auth } from '@/helpers/constants'
import store from '@/store'

const Login = {
    path: '/pipz',
    name: 'Login',
    component: () => import('@/components/auth/Login'),
    meta: {
        en_title: headers.en.login,
        navBar: false,
        authRequired: false
    },
    // beforeEnter (to, from, next) {
        // if (store.getters[$auth + '/isLoggedIn']) {
        //     next('/')
        // } else {
        //     next()
        // }
    // }
}

const Admin = {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/components/admin/Admin'),
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
    Login,
    Admin
]

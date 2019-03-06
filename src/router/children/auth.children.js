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
    beforeEnter (to, from, next) {
        if (store.getters[$auth + '/isLoggedIn']) {
            next('/admin')
        } else {
            next()
        }
    }
}

const Admin = {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/components/admin/Admin'),
    meta: {
        en_title: headers.en.login,
        navBar: false,
        authRequired: false,
        theme: 'light'
    },
    beforeEnter (to, from, next) {
        store.dispatch(`${$auth}/validateLogin`)
            .then(() => next())
            .catch(() => next('/pipz'))
    },
    children: [
        {
            path: 'recipe',
            name: 'AdminRecipe',
            component: () => import('@/components/admin/recipe/AdminRecipe'),
            meta: {
                en_title: headers.en.login,
                navBar: false,
                authRequired: false,
                theme: 'light'
            },
            beforeEnter (to, from, next) {
                store.dispatch(`${$auth}/validateLogin`)
                    .then(() => next())
                    .catch(() => next('/pipz'))
            }
        },
        {
            path: 'music',
            name: 'AdminMusic',
            component: () => import('@/components/admin/AdminMusic'),
            meta: {
                en_title: headers.en.login,
                navBar: false,
                authRequired: false,
                theme: 'light'
            },
            beforeEnter (to, from, next) {
                store.dispatch(`${$auth}/validateLogin`)
                    .then(() => next())
                    .catch(() => next('/pipz'))
            }
        },
        {
            path: 'skills',
            name: 'AdminSkills',
            component: () => import('@/components/admin/AdminSkills'),
            meta: {
                en_title: headers.en.login,
                navBar: false,
                authRequired: false,
                theme: 'light'
            },
            beforeEnter (to, from, next) {
                store.dispatch(`${$auth}/validateLogin`)
                    .then(() => next())
                    .catch(() => next('/pipz'))
            }
        },
        {
            path: 'projects',
            name: 'AdminProjects',
            component: () => import('@/components/admin/AdminProjects'),
            meta: {
                en_title: headers.en.login,
                navBar: false,
                authRequired: false,
                theme: 'light'
            },
            beforeEnter (to, from, next) {
                store.dispatch(`${$auth}/validateLogin`)
                    .then(() => next())
                    .catch(() => next('/pipz'))
            }
        }
    ]
}

export default [
    Login,
    Admin
]

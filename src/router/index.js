import Vue from 'vue'
import Router from 'vue-router'
import routes from './children'
import store from '@/store/'
import { $auth, $pageLoader } from '@/helpers/constants'

Vue.use(Router)

const router = new Router({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeResolve((to, from, next) => {
    if (to.name) {
    }
    next()
})

router.beforeEach((to, from, next) => {
    // check if the route requires authentication
    const isAuthRequired = to.meta.hasOwnProperty('authRequired')
        ? to.meta.authRequired
        : false

    // continue to page if authentication is not required
    if (!isAuthRequired) return next()
    // if user is not logged in redirect
    if (!store.getters[$auth + '/isLoggedIn']) return redirectToLogin()

    // validate if local token is still a valid token for user
    store.commit($pageLoader + '/pageLoading')
    store.dispatch($auth + '/validateLogin')
        .then(response => {
            response ? next() : redirectToLogin()
        })
        .catch(() => {
            redirectToLogin()
        })

    function redirectToLogin () {
        next({name: 'Login', query: {redirectFrom: to.fullPath}})
    }
})

router.afterEach(() => {
    store.commit($pageLoader + '/pagePost')
})

export default router

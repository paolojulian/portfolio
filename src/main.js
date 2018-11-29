// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import './helpers/globals'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})

Vue.filter('convertDateTime', function (value) {
    let datetime = moment(value)
    return (datetime.isValid())
        ? datetime.format('D-MMM-YYYY')
        : value
})

axios.interceptors.response.use(undefined, error => {
    console.error(error)
    return Promise.reject(error)
})

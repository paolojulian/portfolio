// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './helpers/globals'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import GLOBAL_MIXINS from './mixins'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    AOS.init()
  },
  render: (h) => h(App),
}).$mount('#app');

Vue.mixin(GLOBAL_MIXINS)

Vue.filter('convertDateTime', function (value) {
    let datetime = moment(value)
    return (datetime.isValid())
        ? datetime.format('D-MMM-YYYY')
        : value
})

axios.interceptors.response.use(undefined, error => {
    return Promise.reject(error)
})

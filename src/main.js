// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import InstantSearch from 'vue-instantsearch'
import axios from 'axios'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(InstantSearch)
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

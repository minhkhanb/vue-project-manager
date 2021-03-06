import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(Vuelidate)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initStore');
	}
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default store = new Vuex.Store({
  state: {

  },
  mutations: {
    // See: https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store
    initStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
      }
    }
  },
  actions: {

  },
  getters: {

  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

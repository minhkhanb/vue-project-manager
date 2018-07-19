import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: {
    initStore(state) {
      if (localStorage.getItem('store')) {
        const cache = JSON.parse(localStorage.getItem('store'))

        if (cache.projects) {
          state.projects = cache.projects
        }
      }
    }
  },
  modules: {
    projects
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

export default store

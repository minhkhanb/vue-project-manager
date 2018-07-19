import uuidv1 from 'uuid/v1'

const state = {
  tasks: []
}

const mutations = {
  createTask(state, task) {
    task.taskId = uuidv1()
    state.tasks.push(task)
  }
}

const actions = {
  createTask({ commit }, task) {
    commit('createTask', task)
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}

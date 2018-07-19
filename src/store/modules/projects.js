import uuidv1 from 'uuid/v1'

const state = {
  projects: []
}

const mutations = {
  createProject(state, project) {
    project.projectId = uuidv1()
    project.tasks = []
    state.projects.push(project)
  }
}

const actions = {
  createProject({ commit }, project) {
    commit('createProject', project)
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

import Home from './components/Home'
import Projects from './components/Projects'
import Project from './components/Project'
import Tasks from './components/Tasks'
import Task from './components/Task'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/projects/:projectId',
    name: 'project',
    component: Project
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/tasks/:taskId',
    name: 'task',
    component: Task
  }
]

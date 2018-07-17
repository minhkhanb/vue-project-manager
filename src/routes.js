import Home from './components/Home'
import ProjectDetails from './components/ProjectDetails'
import ProjectEdit from './components/ProjectEdit'
import ProjectNew from './components/ProjectNew'
import Projects from './components/Projects'
import TaskDetails from './components/TaskDetails'
import TaskEdit from './components/TaskEdit'
import TaskNew from './components/TaskNew'
import Tasks from './components/Tasks'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/project/details/:projectId',
    name: 'project-details',
    component: ProjectDetails
  },
  {
    path: '/project/edit/:projectId',
    name: 'project-edit',
    component: ProjectEdit
  },
  {
    path: '/project/new',
    name: 'project-new',
    component: ProjectNew
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/task/details/:taskId',
    name: 'task-details',
    component: TaskDetails
  },
  {
    path: '/task/edit/:taskId',
    name: 'task-edit',
    component: TaskEdit
  },
  {
    path: '/task/new',
    name: 'task-new',
    component: TaskNew
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  }
]

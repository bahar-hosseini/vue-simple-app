import { createRouter, createWebHashHistory } from 'vue-router'
import Options from '../views/Option.vue'

const routes = [
  {
    path: '/',
    name: 'Options',
    component: Options
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import(/* webpackChunkName: "about" */ '../views/Composition.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

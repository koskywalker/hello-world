import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Min from '../views/Min.vue'
import Max from '../views/Max.vue'
import Clamp from '../views/Clamp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/min',
    name: 'Min',
    component: Min
  },
  {
    path: '/max',
    name: 'Max',
    component: Max
  },
  {
    path: '/clamp',
    name: 'Clamp',
    component: Clamp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Groups from '../views/Groups.vue'
import Messages from '../views/Messages.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

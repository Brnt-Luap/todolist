import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import ListView from '@/views/ListView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ],
  scrollBehavior (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth' // Smooth scrolling effect
      }
    }
  }
})

export default router

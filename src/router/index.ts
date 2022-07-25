import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '../components/main/MainComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main // weazyexe.dev',
      component: MainComponent
    }
  ]
})

export default router

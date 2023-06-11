import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:path(.*)*',
      name: 404,
      redirect: '/',
    },
  ],
})

router.beforeEach((to, from, next) => {
  next()
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes],
})

router.beforeEach((from, to, next) => {
  console.log('路由守卫')
  next()
})

export default router

import HomeView from '../views/HomeView.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:path(.*)*',
    name: '404',
    redirect: '/',
  },
]

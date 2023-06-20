import VueRouter from 'vue-router'
import blog from '@/router/blog'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/Index.vue'),
  },
  ...blog,
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

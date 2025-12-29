// 1. 换回 createWebHistory
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // 🌟 核心修改：必须把 BASE_URL 传进去！
  // 这样路由才知道你是部署在 /-todolist-/ 这个子目录下
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      redirect: '/todo'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/time',
      name: 'time',
      component: () => import('../views/Time.vue')
    }
  ]
})

export default router

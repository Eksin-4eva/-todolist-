import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/todo' // 打开直接跳到 todo 吧，方便看效果
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue') // 我们马上创建这个文件
    },
    {
      path: '/time',
      name: 'time',
      component: () => import('../views/Time.vue') // 我们马上创建这个文件
    },
  ]
})

export default router
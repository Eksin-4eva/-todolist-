// 1. 引入 createWebHashHistory (注意多了个 Hash)
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // 2. 使用 Hash 模式，这里不需要传参数了
  history: createWebHashHistory(), 
  
  routes: [
    // ... 你的路由规则保持不变 ...
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

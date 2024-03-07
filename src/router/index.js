import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/views/Index/index.vue'
import Login from '@/views/Login/index.vue'
import NotFound from '@/views/404.vue'
// 配置路由
const routes = [
  { path: '/', component: Index,redirect: '/index' },
  { path: '/login', component: Login },
  {path:'/index',component:Index},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})




export default router

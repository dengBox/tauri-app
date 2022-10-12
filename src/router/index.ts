import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Common from '../views/Common.vue'

// 自动导入其他 router 文件
const directives = import.meta.globEager('./models/**')
const routerList: Array<RouteRecordRaw> = []

for (const com in directives) {
  if (!/\.\/[A-Za-z]+\/index\.ts/.test(com)) {
    routerList.push(...(directives[com] as any).default)
  }
}
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Common,
    children: [
      ...routerList
    ]
  }
  // {
  //   path: '/login',
  //   name: 'login',
  //   component:
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

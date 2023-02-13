import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Common from '@/views/Common.vue';

// 自动导入其他 router 文件
const directives = import.meta.globEager('./models/**');
const routerList: Array<RouteRecordRaw> = [];

for (const com in directives) {
  if (!/\.\/[A-Za-z]+\/index\.ts/.test(com)) {
    routerList.push(...(directives[com] as any).default);
  }
}
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'game',
    component: Common,
    children: [
      ...routerList
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/LoginIndex.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const token = true;

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login') {
    return next(!token ? '/login' : 'game');
  }
  if (!token) {
    return next('/login');
  }
  next();
});

export default router;

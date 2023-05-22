import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Common from '@/views/CommonView.vue';

// 自动导入其他 router 文件
const directives = import.meta.glob('./models/**', { eager: true });
const routerList: Array<RouteRecordRaw> = [];

for (const com in directives) {
  if (!/\.\/[A-Za-z]+\/index\.ts/.test(com)) {
    routerList.push(...(directives[com] as any).default);
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/common',
    name: 'common',
    component: Common,
    children: [
      ...routerList,
      {
        path: 'home',
        name: 'home',
        component: {
          render () {
            return <div>home</div>;
          }
        }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: {
          render () {
            return <div>404</div>;
          }
        }
      }
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  }
});

// const token = false;

router.beforeEach((to, from, next) => {
  // if (!token && to.path !== '/login') {
  //   return next(!token ? '/login' : '/common/game');
  // }
  next();
});

export default router;

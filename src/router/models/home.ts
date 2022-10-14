import { RouteRecordRaw } from 'vue-router'

const oneDayRoute: Array<RouteRecordRaw> = [
  // {
  //   path: '/oneDay',
  //   name: 'oneDay',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "oneDay" */ '../views/days/one-day.vue')
  // }
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/HomeIndex.vue')
  }
]

export default oneDayRoute

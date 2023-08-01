import { RouteRecordRaw } from 'vue-router';

const oneDayRoute: Array<RouteRecordRaw> = [
  {
    path: 'game',
    children: [
      {
        path: 'soldier',
        name: 'littleSoldier',
        component: () => import(/* webpackChunkName: "littleSoldier" */ '@/views/little-soldier/LittleSoldier.vue')
      },
      {
        path: 'grand',
        name: 'grandLotto',
        component: () => import(/* webpackChunkName: "GrandLotto" */ '@/views/game/GrandLotto.vue')
      }
    ]
  }
];

export default oneDayRoute;

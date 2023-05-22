import { RouteRecordRaw } from 'vue-router';

const oneDayRoute: Array<RouteRecordRaw> = [
  {
    path: 'game',
    children: [
      {
        path: 'start',
        name: 'gameStart',
        component: () => import(/* webpackChunkName: "GameIndex" */ '@/views/game/GameIndex.vue')
      }
    ]
  }
];

export default oneDayRoute;

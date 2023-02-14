import { RouteRecordRaw } from 'vue-router';

const oneDayRoute: Array<RouteRecordRaw> = [
  {
    path: '/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "game" */ '@/views/game/GameIndex.js')
  }
];

export default oneDayRoute;

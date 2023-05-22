import { RouteRecordRaw } from 'vue-router';

const oneDayRoute: Array<RouteRecordRaw> = [
  {
    path: 'test',
    children: [
      {
        path: 'fs',
        name: 'testFs',
        component: () => import(/* webpackChunkName: "TestFs" */ '@/views/test/TestFs.vue')
      },
      {
        path: 'worker',
        name: 'testWorker',
        component: () => import(/* webpackChunkName: "TestWorker" */ '@/views/test/TestWorker.vue')
      },
      {
        path: 'wasm',
        name: 'testWasm',
        component: () => import(/* webpackChunkName: "TestWasm" */ '@/views/test/TestWasm.vue')
      },
      {
        path: 'http',
        name: 'testHttp',
        component: () => import(/* webpackChunkName: "TestHttp" */ '@/views/test/TestHttp.vue')
      },
      {
        path: 'shell',
        name: 'testShell',
        component: () => import(/* webpackChunkName: "TestShell" */ '@/views/test/TestShell.vue')
      },
      {
        path: 'shortcut',
        name: 'testShortcut',
        component: () => import(/* webpackChunkName: "TestShortcut" */ '@/views/test/TestShortcut.vue')
      },
      {
        path: 'event',
        name: 'testEvent',
        component: () => import(/* webpackChunkName: "TestEvent" */ '@/views/test/TestEvent.vue')
      },
      {
        path: 'path',
        name: 'testPath',
        component: () => import(/* webpackChunkName: "TestPath" */ '@/views/test/TestPath.vue')
      },
      {
        path: 'dialog',
        name: 'testDialog',
        component: () => import(/* webpackChunkName: "TestDialog" */ '@/views/test/TestDialog.vue')
      },
      {
        path: 'window',
        name: 'testWindow',
        component: () => import(/* webpackChunkName: "TestWindow" */ '@/views/test/TestWindow.vue')
      },
      {
        path: 'updater',
        name: 'testUpdater',
        component: () => import(/* webpackChunkName: "TestUpdater" */ '@/views/test/TestUpdater.vue')
      },
      {
        path: 'index',
        name: 'testIndex',
        component: () => import(/* webpackChunkName: "TestIndex" */ '@/views/test/TestIndex.js')
      }
    ]
  }
];

export default oneDayRoute;

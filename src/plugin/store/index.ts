import { defineStore } from 'pinia';
import useUserStore from './models/user';

export default defineStore('global', {
  state: () => ({
    count: 0,
    isCollapse: false,
    user: useUserStore()
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    // 建议书写含有业务逻辑的方法（可异步），如果仅仅是数据更新，请使用store.$patch
    increment () {
      this.count++;
    },
    changeCollapse (val: boolean) {
      this.isCollapse = val;
    }
  }
});

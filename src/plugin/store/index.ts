import { defineStore } from 'pinia';
import useUserStore from './models/user';

export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
    name: 'Eduardo',
    user: useUserStore()
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment () {
      this.count++;
    }
  }
});

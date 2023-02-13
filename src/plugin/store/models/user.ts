import { defineStore } from 'pinia';

export default defineStore('user', {
  state () {
    return {
      userList: []
    };
  },
  actions: {
    setList () {
      this.userList = [];
    }
  }
});

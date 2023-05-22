import { defineStore } from 'pinia';
import type { TabItem } from '@/interface/core';
import { read } from '@/plugin/storage';

const catchTab = JSON.parse(read('tabList') || '[{"id":"0","label":"首页","path":"/common/home", "hideClose": true}]');

export default defineStore('common', {
  state () {
    return {
      tabList: catchTab as TabItem[]
    };
  },
  actions: {
  }
});

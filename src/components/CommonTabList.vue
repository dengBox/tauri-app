<template>
  <div class="common-tab">
    <ul class="tab-wrap" @click="clickTab">
        <li class="tab-item" v-for="tab in tabList" :key="tab.path" :data-id="tab.id">
          <span class="text">{{tab.label}}</span>
          <el-icon class="icon" v-if="!tab.hideClose"><Close /></el-icon>
        </li>
      </ul>
    <el-icon class="tab-menu" color="#1F2E4D"><ArrowDownBold /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import { read, save, clear } from '@/plugin/storage';
import { computed, onMounted, onUnmounted, watch, watchEffect, unref } from 'vue';
import { useRouter } from 'vue-router';
import useCommonStore from '@/plugin/store/models/common';
import { uuid, deepCopy, getPrentDom } from '@/assets/ts/until';

import type { TabItem } from '@/interface/core';

import {
  Close,
  ArrowDownBold
} from '@element-plus/icons-vue';

const commonStore = useCommonStore();
const router = useRouter();

const tabList = computed(() => commonStore.tabList);

const dispatchEvent = (eventName: string, detail: {tab: TabItem, index: number}) => {
  window.dispatchEvent(new CustomEvent(eventName, { detail }));
};

const clickTab = (event: MouseEvent) => {
  const e = event.target as HTMLElement || document.body;
  const id = getPrentDom(e, 'id');
  if (id !== '') {
    const _tabList = unref(tabList);
    const tabIndex = _tabList.findIndex(tab => tab.id === id);
    if (tabIndex > -1) {
      const tab = _tabList[tabIndex];
      if (e.tagName === 'svg') {
        _tabList.splice(tabIndex, 1);
        if (router.currentRoute.value.path === tab.path) {
          router.push(_tabList.at(-1)!.path);
        }
        commonStore.$patch((state) => {
          state.tabList = _tabList;
        });
      } else {
        router.push(tab?.path);
      }
    }
  }
};

const addEvent = ({ detail }: any = {}) => {
  console.log('add-tab: ', detail);
};

// commonStore.$subscribe((mutation, state) => {
//   console.log(mutation, state);
// });

watch(
  () => router.currentRoute.value,
  () => {
    const { query, path, fullPath } = router.currentRoute.value;
    const label = read('activeTabLabel');
    if (label && label !== '') {
      const newTab = {
        id: uuid(),
        label,
        path: query._s ? fullPath : path
      };
      const newTabList = deepCopy(unref(tabList));
      const index = unref(tabList).findIndex(tab => tab.path === newTab.path);
      if (index > -1) {
        newTabList.splice(index, 1, newTab);
      } else {
        if (newTabList.length > 20) newTabList.splice(0, 1);
        newTabList.push(newTab);
        dispatchEvent('tab-add', { tab: newTab, index: newTabList.length });
      }
      commonStore.$patch((state) => {
        state.tabList = newTabList;
      });
      clear('activeTabLabel');
    }
  },
  { immediate: true }
);

watchEffect(() => {
  save('tabList', JSON.stringify(unref(tabList)));
});

onMounted(() => {
  window.addEventListener('tab-add', addEvent);
});

onUnmounted(() => {
  window.removeEventListener('tab-add', addEvent);
});

</script>

<style lang="scss" scoped>
.common-tab {
  height: 32px;
  margin: 8px $base-margin;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tab-wrap {
    height: 100%;
    overflow-y: auto;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .tab-item {
    display: inline-block;
    line-height: 32px;
    background-color: $base-background;
    margin-right: 6px;
    padding: 0 16px;
    border-radius: $border-radius-base;
    color: $unimportance-color;
    cursor: pointer;
    transition: color $transition-time;
    &-active .text {
      color: $primary-color;
    }
    .icon {
      margin-left: 4px;
      &:hover {
        color: $primary-color;
      }
    }
    .icon, .text {
      vertical-align: middle;
    }
  }
  .tab-menu {
    width: 32px;
    height: 32px;
    background-color: $base-background;
  }
}
</style>

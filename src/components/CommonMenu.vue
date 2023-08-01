<template>
  <article class="common-menu h-100% overflow-auto w-180px">
    <el-menu
      router
      :default-active="defaultMenu"
      :collapse="isCollapse"
      @select="selectMenu" >
      <el-sub-menu
      :index="firstMenu.url"
      v-for="firstMenu in menuList"
      :key="firstMenu.url">
        <template #title>
          <el-icon v-if="!!firstMenu.icon">
            <component :is="firstMenu.icon" />
          </el-icon>
          <span>{{firstMenu.text}}</span>
        </template>
        <el-menu-item
        :index="subMenu.url"
        v-for="subMenu in firstMenu.children || []"
        :key="subMenu.url" >
          <template #title>
            <el-icon v-if="!!subMenu.icon">
              <component :is="subMenu.icon" />
            </el-icon>
            <span>{{subMenu.text}}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </article>
</template>

<script setup>
import { ref, reactive, shallowRef, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

import useGlobalStore from '@/plugin/store';
import { save } from '@/plugin/storage';

import {
  Cpu,
  Files,
  Document,
  Menu as IconMenu
} from '@element-plus/icons-vue';

const globalStore = useGlobalStore();
const route = useRoute();

const isCollapse = computed(() => globalStore.isCollapse);
const defaultMenu = ref('');

const menuList = reactive([
  {
    url: 'test',
    text: '测试栏目',
    icon: shallowRef(Files),
    children: [
      {
        url: '/common/test/worker',
        text: '测试worker',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/wasm',
        text: '测试wasm',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/fs',
        text: '测试（fs）',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/http',
        text: '测试（http）',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/shell',
        text: '测试（shell）',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/shortcut',
        text: '测试（shortcut）',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/event',
        text: '测试（event）',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/path',
        text: '测试（path）',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/dialog',
        text: '测试（dialog）',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/window',
        text: '测试（window）',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/updater',
        text: '测试（updater）',
        icon: shallowRef(Document),
        children: []
      },
      {
        url: '/common/test/index',
        text: '测试页面',
        icon: shallowRef(Document),
        children: []
      }
    ]
  },
  {
    url: 'game',
    text: '游戏栏目',
    icon: shallowRef(IconMenu),
    children: [
      {
        url: '/common/game/soldier',
        text: '小兵快跑',
        icon: shallowRef(Cpu),
        children: []
      },
      {
        url: '/common/game/grand',
        text: '大乐透奥',
        icon: shallowRef(Cpu),
        children: []
      }
    ]
  }
]);

const selectMenu = (index, pathList) => {
  let activeMenu = menuList;
  pathList.forEach((path, i) => {
    activeMenu = activeMenu.find(m => m.url === path);
    if (i !== pathList.length - 1) {
      activeMenu = activeMenu.children || [];
    }
  });
  save('activeTabLabel', activeMenu.text || '');
};

watch(
  () => route.path,
  () => {
    defaultMenu.value = route.path;
  },
  { immediate: true }
);

</script>

<style lang="scss" scoped>
.common-menu {
  box-shadow: 0px 2px 13px 0px rgba(175,175,175,0.47);
  background-color: $base-background;
  :deep(.el-menu) {
    border-right: 0;
  }
}
</style>

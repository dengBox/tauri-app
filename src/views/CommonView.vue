<template>
  <div id="common-wrap">
    <CommonHeader />
    <main class="common-main">
      <CommonMenu />
      <section class="common-content">
        <common-tab-list />
        <div class="router-view">
          <router-view v-slot="{ Component, route }">
            <keep-alive :max="10" :exclude="excludeList">
              <transition :name="route.meta.transition || 'fade'" mode="out-in">
                <component :is="Component" />
              </transition>
            </keep-alive>
          </router-view>
        </div>
        <CommonFooter />
      </section>
    </main>
  </div>
</template>

<script setup>
import CommonMenu from '@/components/CommonMenu.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonFooter from '@/components/CommonFooter.vue';
import CommonTabList from '@/components/CommonTabList.vue';

const excludeList = [];
</script>

<style scoped lang="scss">
#common-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  .common-main {
    flex: 1;
    display: flex;
    overflow: hidden;
    .common-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
      .router-view {
        margin: 0 $base-margin $base-margin $base-margin;
        padding: $base-padding;
        flex: 1;
        background-color: $base-background;
        border-radius: $border-radius-base;
      }
    }
  }
}
</style>

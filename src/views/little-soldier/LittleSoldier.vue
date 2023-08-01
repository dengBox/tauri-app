<template>
  <div class="home-wrap">
    <div class="home-view" ref="mapView">
      <!-- 地图 -->
      <canvas id="base-map" ref="baseMap"></canvas>
      <!-- 用户 -->
      <canvas id="user-instance" ref="userInstance"></canvas>
      <!-- 鸟瞰 -->
      <canvas id="aerial-view" ref="aerialView"></canvas>
      <!-- 背景音乐 -->
      <audio src=""></audio>
      <audio autoplay loop src="/audio/2611682248.mp3"></audio>
      <!-- 特效音乐 -->
      <audio src=""></audio>
      <!-- 人物音乐 -->
      <audio src=""></audio>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameInstance from './start';
import { ref, onMounted, onUnmounted } from 'vue';

const mapView = ref();
const baseMap = ref();
const userInstance = ref();
const aerialView = ref();

let GAME_INSTANCE: GameInstance;

// 生命周期钩子
onMounted(() => {
  GAME_INSTANCE = new GameInstance({
    mapViewEl: mapView.value,
    baseMapEl: baseMap.value,
    userEl: userInstance.value,
    aerialEl: aerialView.value
  });
  GAME_INSTANCE.start();
});
onUnmounted(() => {
  GAME_INSTANCE.destory();
});
</script>
s
<style scoped lang="scss">
.home-wrap {
  width: 100%;
  height: 100%;
  font-size: 0;
  position: relative;
}
.home-view {
  width: 100%;
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
 #base-map {
  background-color: #000;
 }
 #user-instance {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
 }
 #aerial-view {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #666;
 }
}
</style>
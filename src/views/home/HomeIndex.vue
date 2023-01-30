<template>
  <div class="home-view" ref="mapView">
    <!-- 地图 -->
    <canvas id="base-map" ref="baseMap"></canvas>
    <!-- 用户 -->
    <canvas id="user-instance" ref="userInstance"></canvas>
    <!-- 鸟瞰 -->
    <canvas id="aerial-view" ref="aerialView"></canvas>
    <!-- 背景音乐 -->
    <audio src=""></audio>
    <!-- 特效音乐 -->
    <audio src=""></audio>
    <!-- 人物音乐 -->
    <audio src=""></audio>
  </div>
</template>

<script setup lang="tsx">
import GameInstance from './start'
import { ref, onMounted, onUnmounted } from 'vue'
const mapView = ref()
const baseMap = ref()
const userInstance = ref()
const aerialView = ref()

let GAME_INSTANCE: GameInstance

// 生命周期钩子
onMounted(() => {
  GAME_INSTANCE = new GameInstance({
    mapViewEl: mapView.value,
    baseMapEl: baseMap.value,
    userEl: userInstance.value,
    aerialEl: aerialView.value
  })
  GAME_INSTANCE.start()
})
onUnmounted(() => {
  GAME_INSTANCE.destory()
})
</script>
s
<style scoped lang="scss">
.home-view {
  width: 100vw;
  height: 100vh;
  font-size: 0;
  overflow: auto;
  scroll-behavior: smooth;
  // pointer-events:none;
  // perspective-origin: 0, 0;
  // transform: rotateX(30deg);
  // transform-style: preserve-3d;
  &::-webkit-scrollbar {
    display: none;
  }
 #base-map {
  background-color: #000;
 }
 #user-instance {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
 }
 #aerial-view {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
 }
}
</style>

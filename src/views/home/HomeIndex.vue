<template>
  <div class="home-view">
    <canvas id="base-map" ref="baseMap"></canvas>
    <canvas id="user-instance" ref="userInstance"></canvas>
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
const baseMap = ref()
const userInstance = ref()
let GAME_INSTANCE

// 响应式状态
// const count = ref(0)

// 用来修改状态、触发更新的函数
// function increment() {
//   count.value++
// }

function keyDown (event: KeyboardEvent) {
  console.log('keydown', event)
}

// 生命周期钩子
onMounted(() => {
  GAME_INSTANCE = new GameInstance({
    baseMapEl: baseMap.value,
    userEl: userInstance.value
  })
  GAME_INSTANCE.start()
  window.addEventListener('keydown', keyDown)
})
onUnmounted(() => {
  window.removeEventListener('keydown', keyDown)
})
</script>

<style scoped lang="scss">
.home-view {
  width: 100vw;
  height: 100vh;
  font-size: 0;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
 #base-map {
  background: #000;
 }
 #user-instance {
  background: #f00;
 }
}
</style>

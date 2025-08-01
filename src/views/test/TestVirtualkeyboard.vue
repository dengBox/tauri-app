<template>
  <div class="test-keyboard-wrap">
    <h5> 第一步、设置默认密码：</h5>
    <div class="default-password-wrap">
      <el-input-number class="password-input" :precision="0" :step="1" :max="9" v-model="defaultCode1" :maxlength="1" @change="v => selectKeys[0] = v || 0"/>
      <el-input-number class="password-input" :precision="0" :step="1" :max="9" v-model="defaultCode2" :maxlength="1" @change="v => selectKeys[1] = v || 0" />
      <el-input-number class="password-input" :precision="0" :step="1" :max="9" v-model="defaultCode3" :maxlength="1" @change="v => selectKeys[2] = v || 0" />
      <el-input-number class="password-input" :precision="0" :step="1" :max="9" v-model="defaultCode4" :maxlength="1" @change="v => selectKeys[3] = v || 0" />
    </div>
    <h5> 第二步、开始执行：</h5>
    <el-button @click="startEvent" type="primary">开始执行</el-button>
    <!-- <el-select v-model="selectKeys" multiple placeholder="请选择">
      <el-option
        v-for="item in keyList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select> -->
    <div class="password-wrap">
      <li class="password-item" v-for="n in keyList" :key="n.label">{{ n.label }}</li>
      <li class="password-item">{{ 9 }}</li>
      <li class="password-item"></li>
      <li class="password-item">{{ 0 }}</li>
      <li class="password-item"></li>
    </div>
    <p>当前输入密码：{{ selectKeys }}</p>
  </div>
</template>

<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';

import { ref, onMounted, onDeactivated } from 'vue';

const defaultCode1 = ref(1);
const defaultCode2 = ref(9);
const defaultCode3 = ref(9);
const defaultCode4 = ref(8);

const selectKeys = ref([1, 9, 9, 8]);
const keyList = ref<any>([]);

listen('send_event', (e) => {
  selectKeys.value = e.payload as Array<number>

});

listen('send_end', () => {
  console.log('执行结束', performance.now())
});



onMounted(() => {
  // invoke('start_listen_event').then(() => {
  //   console.log('开始监听全局事件');
  // });
  const list = [];
  for (let n = 1; n < 9; n++) {
    list.push({
      value: 'Num' + n,
      label: n
    });
  }
  keyList.value = list;
});

onDeactivated(() => {
  // listenSend();
});

const startEvent = () => {
  invoke('send_event', {
    code: selectKeys.value
  }).then(() => {
    console.log('开始执行', performance.now())
  });
};
</script>

<style lang="scss" scoped>
.test-keyboard-wrap {
  width: 500px;
  padding: 20px;
}
.default-password-wrap {
  width: 100%;
  display: flex;
  margin: 10px 0;
  .password-input {
    width: 100px;
    margin-right: 2px;
  }
}

.password-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  width: 151px;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  .password-item {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    &:hover {
      transition: background-color, color .2s;
      background-color: #666;
      color: #fff;
    }
  }
}
</style>
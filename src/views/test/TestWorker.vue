<template>
  <div class="test-worker-wrap">
    {{workerMessage}}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import Worker from '@/plugin/worker/index.worker?worker';
const worker = new Worker();

const workerMessage = ref('');

worker.onmessage = (e) => {
  workerMessage.value = e.data;
};

worker.postMessage('hello from main');

</script>
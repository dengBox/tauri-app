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
  console.log(e.data);
  // workerMessage.value = e.data;
  const data = e.data;
  let result;
  switch (data.type) {
    case 'FN':
      result = window[data.target][data.propKey](...data.params);
      break;
  }
  // worker.postMessage(result);
};

worker.postMessage({
  type: 'javascript',
  value: `
  const dom = document.createElement('div');
  dom.style.width = '100px';
  dom.style.height = '100px';
  dom.style.border = '1px solid #000';
  document.body.appendChild(dom);
  `
});
// 终止worker
// worker.terminate()

</script>
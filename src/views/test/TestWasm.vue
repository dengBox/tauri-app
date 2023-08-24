<template>
  <div class="test-wasm-wrap">
  </div>
</template>

<script lang="ts" setup>
import Worker from '@/plugin/worker/wasm.worker?worker';

const worker = new Worker();

WebAssembly.compileStreaming(fetch('/wasm/simple.wasm'))
  .then(module => {
    worker.postMessage(module);
  });
</script>
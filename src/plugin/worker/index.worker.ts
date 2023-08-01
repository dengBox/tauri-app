self.addEventListener(
  'message',
  function (e) {
    console.log(navigator.hardwareConcurrency); // 获取cpu核数
    console.log('index.worker.js', e.data);
    self.postMessage('hello from worker');
  },
  false
);

self.addEventListener(
  'error',
  function (error) {
    console.log('embed.worker.js error', error);
    // 关闭当前worker
    close();
  },
  false
);

self.addEventListener(
  'messageerror',
  function (error) {
    console.log('embed.worker.js messageerror', error);
  },
  false
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// importScripts(); // 不能再esm中使用
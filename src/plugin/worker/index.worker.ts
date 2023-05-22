self.addEventListener(
  'message',
  function (e) {
    console.log('index.worker.js', e.data);
    self.postMessage('hello from worker');
  },
  false
);
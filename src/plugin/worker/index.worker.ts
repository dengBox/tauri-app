interface CodeMessage {
  type: 'javascript',
  value: string
}

const _window = new Proxy({
  document: {
    createElement: (...args: any) => {
      self.postMessage({
        type: 'FN',
        target: 'document',
        propKey: 'createElement',
        params: args
      });
      self.addEventListener('message', (e) => {
        console.log(e);
      });
      return {

      };
    }
  }
}, {
  get: (target, propKey, receiver) => {
    let type = '';
    switch (propKey) {
      case 'createElement':
        type = 'FN';
        break;
    }
    if (type) {
      self.postMessage({
        type,
        target: 'document',
        propKey
      });
    } else {
      return Reflect.get(target, propKey, receiver);
    }
  },
  set: (target, propKey, value, _receiver) => {
    return Reflect.set(target, propKey, value);
  }
});

self.addEventListener('message', function (e) {
  if (e.type !== 'message') return;
  const data = e.data as CodeMessage;
  let fn;
  switch (data.type) {
    case 'javascript':
      // eslint-disable-next-line no-new-func
      fn = new Function(`
      const document = this.document
        ${data.value}
      `);
      break;
  }
  fn && fn.call(_window);
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
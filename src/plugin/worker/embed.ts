// https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers#%E5%B5%8C%E5%85%A5%E5%BC%8F_worker

export const getWorkerByFn = (func: () => void) => {
  const script = `(
    ${func}
  )()`;

  // 嵌入式的写法
  return new Worker(window.URL.createObjectURL(new Blob([script], { type: 'text/javascript' })));
};

export const getWorkerByUrl = (url: string, flag: boolean) => {
  const workerUrl = flag
    ? URL.createObjectURL(new Blob([`importScripts('${url}')`], { type: 'text/javascript' }))
    : url;

  return new Worker(workerUrl);
};

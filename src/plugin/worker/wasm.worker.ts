// https://developer.mozilla.org/zh-CN/docs/WebAssembly/Text_format_to_wasm
const importObject = {
  imports: {
    imported_func (arg: any) {
      self.postMessage(arg);
    }
  }
};

self.onmessage = function (event) {
  console.log('module received from main thread');
  const module = event.data;
  // const exports = WebAssembly.Module.exports(module);
  // console.log(exports);
  WebAssembly.instantiate(module, importObject)
    .then(instance => {
      (instance as any).exports.exported_func();
    });
};

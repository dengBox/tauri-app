type Options = {
  url: string
}

export default class Audio {
  config;
  context = new window.AudioContext();
  source: AudioBufferSourceNode | undefined;
  audioBuffer: AudioBuffer | undefined;
  constructor (opt: Options) {
    this.config = opt;
    this.loadAudioFile(opt.url);
  }

  stopSound () {
    if (this.source) {
      this.source.stop(); // 立即停止
    }
  }

  playSound () {
    this.source = this.context.createBufferSource();
    this.source.buffer = this.audioBuffer as AudioBuffer;
    this.source.loop = true;
    this.source.connect(this.context.destination);
    this.source.start(); // 立即播放
  }

  initSound (arrayBuffer: ArrayBuffer) {
    this.context.decodeAudioData(arrayBuffer, (buffer) => { // 解码成功时的回调函数
      this.audioBuffer = buffer;
      this.playSound();
    }, (e) => { // 解码出错时的回调函数
      console.log('404', e);
    });
  }

  loadAudioFile (url: string) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    const xhr = new XMLHttpRequest(); // 通过XHR下载音频文件
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function () { // 下载完成
      _this.initSound(this.response);
    };
    xhr.send();
  }
}

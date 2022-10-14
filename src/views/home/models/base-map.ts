import { blockError } from '@/assets/ts/log'

export interface BaseMapOptions {
  el: HTMLCanvasElement
}

export class BaseMap {
  ctx: CanvasRenderingContext2D | null = null
  constructor ({ el } : BaseMapOptions) {
    if (!el) {
      blockError('Please set el attribute!')
    }
    this.ctx = el.getContext('2d')
  }

  render () {
    // console.log(this.ctx)
  }
}

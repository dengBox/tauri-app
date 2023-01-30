import { BaseMap } from './base-map'
import type { BaseMapOptions } from './base-map'

interface BaseMapCnfig {
  width: number,
  height: number
}

interface MapCnfig {
  config?: BaseMapCnfig
}

export default class Map extends BaseMap {
  readonly MAP_CONFIG: BaseMapCnfig = {
    width: 10000,
    height: 10000
  }

  constructor (options: BaseMapOptions & MapCnfig) {
    super(options)
    if (options.config) {
      this.MAP_CONFIG = options.config
    }
  }

  render () {
    this.initMapStyle()
  }

  initMapStyle () {
    const ctx = this.ctx!
    ctx.canvas.width = this.MAP_CONFIG.width
    ctx.canvas.height = this.MAP_CONFIG.height
    // ctx.canvas.style.cssText = `
    //   width: ${this.MAP_CONFIG.width}px;
    //   height: ${this.MAP_CONFIG.height}px;
    // `
    ctx.strokeStyle = '#fff'
    const boxW = 50
    let wNum = this.MAP_CONFIG.width / boxW
    while (wNum > 0) {
      const x = wNum * boxW
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, this.MAP_CONFIG.height)
      ctx.stroke()
      --wNum
    }

    const boxH = 50
    let hNum = this.MAP_CONFIG.height / boxH
    while (hNum > 0) {
      const x = hNum * boxH
      ctx.beginPath()
      ctx.moveTo(0, x)
      ctx.lineTo(this.MAP_CONFIG.width, x)
      ctx.stroke()
      --hNum
    }
  }
}

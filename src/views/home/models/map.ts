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
  readonly DEFAULT_CONFIG: BaseMapCnfig = {
    width: 1920,
    height: 1080
  }

  readonly MAP_CONFIG: BaseMapCnfig
  constructor (options: BaseMapOptions & MapCnfig) {
    super(options)
    this.MAP_CONFIG = options.config || this.DEFAULT_CONFIG
  }

  render () {
    this.initMapStyle()
  }

  initMapStyle () {
    const el = this.ctx!.canvas
    el.style.cssText = `width: ${this.MAP_CONFIG.width}px; height: ${this.MAP_CONFIG.height}px;`
  }
}

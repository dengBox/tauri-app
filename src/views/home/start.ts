import { log } from '@/assets/ts/log'
import { addEvent, delEvent } from '@/assets/ts/dom'
import { BaseMap } from './models/base-map'
import Map from './models/map'
import User from './models/user'

interface GameOptions {
  autoStart?: boolean,
  mapViewEl: HTMLDivElement,
  baseMapEl: HTMLCanvasElement,
  userEl: HTMLCanvasElement,
  aerialEl: HTMLCanvasElement
}

export default class GameInstance {
  readonly config: GameOptions
  BASE_MAP: BaseMap | undefined
  USER_INSTANCE: BaseMap | undefined
  constructor (option: GameOptions) {
    this.config = option
    if (option.autoStart) {
      this.start()
    }
  }

  start () {
    log('map init start!')
    this.BASE_MAP = new Map({ el: this.config.baseMapEl })
    this.BASE_MAP.render()
    log('map init end!')

    log('user init start!')
    this.USER_INSTANCE = new User({
      el: this.config.userEl,
      mapEl: this.config.mapViewEl
    })
    this.USER_INSTANCE.render()
    log('user init end!')
    addEvent('visibilitychange', this.showGame.bind(this))
    addEvent('mousewheel', this.scrollView.bind(this), this.config.mapViewEl)
  }

  showGame () {
    // hidden || visible
    document.visibilityState === 'hidden'
      ? console.warn('隐藏界面')
      : console.warn('显示界面')
  }

  scrollView (event: Event) {
    const y = (event as WheelEvent).deltaY
    if (y > 0) {
      console.log('放大')
    } else if (y < 0) {
      console.log('缩小')
    }
    // event.preventDefault()
    // event.stopPropagation()
    return false
  }

  destory () {
    delEvent('visibilitychange', this.showGame)
    delEvent('mousewheel', this.scrollView, this.config.mapViewEl)
  }
}
import { log } from '@/assets/ts/log'
import { BaseMap } from './models/base-map'
import Map from './models/map'
import User from './models/user'

interface GameOptions {
  autoStart?: boolean,
  baseMapEl: HTMLCanvasElement,
  userEl: HTMLCanvasElement
}

export default class GameInstance {
  readonly config: GameOptions
  BASE_MAP: BaseMap | undefined
  USER_INSTANCE: BaseMap | undefined
  constructor ({ baseMapEl, userEl, autoStart }: GameOptions) {
    this.config = {
      baseMapEl,
      userEl
    }
    if (autoStart) {
      this.start()
    }
  }

  start () {
    log('map init start!')
    this.BASE_MAP = new Map({ el: this.config.baseMapEl })
    this.BASE_MAP.render()
    log('map init end!')

    log('user init start!')
    this.USER_INSTANCE = new User({ el: this.config.userEl })
    this.USER_INSTANCE.render()
    log('user init end!')
  }
}

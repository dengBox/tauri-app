import { BaseMap } from './base-map'
import type { BaseMapOptions } from './base-map'
import { addEvent, delEvent } from '@/assets/ts/dom'
import { getKey } from '@/assets/ts/keypress'

type BaseConfig = {
  width: number,
  height: number,
  startX: number,
  startY: number,
  model?: string // 时装
}

type UserConfig = {
  config?: BaseConfig
}

export default class User extends BaseMap {
  USER_CONFIG: BaseConfig = {
    width: 110,
    height: 110,
    startX: 0,
    startY: 0
  }

  constructor (options: BaseMapOptions & UserConfig) {
    super(options)
    if (options.config) {
      this.USER_CONFIG = options.config
    }
    this.initUserStyle()
    this.initKeyEvent()
  }

  protected initUserStyle () {
    const ctx = this.ctx as CanvasRenderingContext2D
    // console.log(this.USER_CONFIG)
    if (!this.USER_CONFIG.model) {
      ctx.canvas.width = this.USER_CONFIG.width
      ctx.canvas.height = this.USER_CONFIG.height
      ctx.strokeStyle = '#f00'
      ctx.fillStyle = '#fff'
      ctx.lineWidth = 4

      // ctx.fillRect(0, 0, this.USER_CONFIG.width, this.USER_CONFIG.height)
      ctx.beginPath()
      ctx.arc(55, 55, 52, 0, Math.PI * 2, true) // 绘制
      ctx.fill()
      ctx.moveTo(90, 55)
      ctx.arc(55, 55, 35, 0, Math.PI, false) // 口 (顺时针)
      ctx.moveTo(45, 45)
      ctx.arc(40, 45, 5, 0, Math.PI * 2, true) // 左眼
      ctx.moveTo(75, 45)
      ctx.arc(70, 45, 5, 0, Math.PI * 2, true) // 右眼
      ctx.stroke()
    }
  }

  protected initKeyEvent () {
    addEvent('keydown', this.keyDown.bind(this))
  }

  protected destory () {
    delEvent('keydown', this.keyDown)
  }

  keyDown (event: Event) {
    const key = getKey(event as KeyboardEvent)
    switch (key) {
      case 'w':
        this.moveTotop(event)
        break
      case 'a':
        this.moveToLeft(event)
        break
      case 's':
        this.moveToBottom(event)
        break
      case 'd':
        this.moveToRight(event)
        break
    }
  }

  moveTotop (event: Event) {
    console.log(event)
  }

  moveToLeft (event: Event) {
    // console.log(event)
  }

  moveToRight (event: Event) {
    // console.log(event)
  }

  moveToBottom (event: Event) {
    // console.log(event)
  }
}

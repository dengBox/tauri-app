import { BaseMap } from './base-map'
import type { BaseMapOptions } from './base-map'
import { addEvent, delEvent } from '@/assets/ts/dom'
import { getKey } from '@/assets/ts/keypress'

type BaseConfig = {
  width: number,
  height: number,
  startX: number,
  startY: number,
  speed: number,
  model?: string // 时装
}

type UserConfig = {
  mapEl: HTMLDivElement,
  config?: BaseConfig
}

export default class User extends BaseMap {
  mapEl: HTMLDivElement
  USER_CONFIG: BaseConfig = {
    width: 110,
    height: 110,
    speed: 40,
    startX: 0,
    startY: 0
  }

  _keyDown

  constructor (options: BaseMapOptions & UserConfig) {
    super(options)
    this.mapEl = options.mapEl
    this._keyDown = this.keyDown.bind(this)
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

      ctx.fillStyle = '#0ff'
      ctx.fillRect(0, 0, this.USER_CONFIG.width, this.USER_CONFIG.height)

      // ctx.beginPath()
      // ctx.arc(55, 55, 52, 0, Math.PI * 2, true) // 绘制
      // ctx.fill()
      // ctx.moveTo(90, 55)
      // ctx.arc(55, 55, 35, 0, Math.PI, false) // 口 (顺时针)
      // ctx.moveTo(45, 45)
      // ctx.arc(40, 45, 5, 0, Math.PI * 2, true) // 左眼
      // ctx.moveTo(75, 45)
      // ctx.arc(70, 45, 5, 0, Math.PI * 2, true) // 右眼
      // ctx.stroke()
    }
  }

  protected initKeyEvent () {
    addEvent('keydown', this._keyDown)
  }

  protected destory () {
    delEvent('keydown', this._keyDown)
  }

  keyDown (event: Event) {
    /**
     * 按下不松开的场景
     * 1. 第二次与第一次触发 间隔500ms
     * 2. 第二次开始，每次间隔80ms
     * 3. 此间按了其他按键，之前未松开的按键即失效
     * 解：
     * 1. 需要监听按下按键的数组，
     * 2. 鼠标抬起需移除对应key
     * 3. 根据按下按键,（固定间隔）触发事件
     */
    event.preventDefault()
    event.stopPropagation()
    // console.log(Date.now(), event)
    const key = getKey(event as KeyboardEvent)
    switch (key) {
      case 'w':
        this.moveTotop(this.mapEl)
        break
      case 'a':
        this.moveToLeft(this.mapEl)
        break
      case 's':
        this.moveToBottom(this.mapEl)
        break
      case 'd':
        this.moveToRight(this.mapEl)
        break
    }
  }

  moveTotop (el: HTMLDivElement) {
    el.scrollTop -= this.USER_CONFIG.speed
  }

  moveToLeft (el: HTMLDivElement) {
    el.scrollLeft -= this.USER_CONFIG.speed
  }

  moveToRight (el: HTMLDivElement) {
    el.scrollLeft += this.USER_CONFIG.speed
  }

  moveToBottom (el: HTMLDivElement) {
    el.scrollTop += this.USER_CONFIG.speed
  }
}

type LoopOptions = {
  mainBody: FrameRequestCallback,
  autoStart: boolean
}

export class Loop {
  eventId = -1
  main
  constructor ({ mainBody, autoStart = true }: LoopOptions) {
    this.main = mainBody
    if (autoStart) {
      this.start(this.main)
    }
  }

  start (mainBody: FrameRequestCallback) {
    this.eventId = window.requestAnimationFrame(mainBody)
  }

  stop () {
    if (this.eventId < 0) return
    window.cancelAnimationFrame(this.eventId)
  }
}

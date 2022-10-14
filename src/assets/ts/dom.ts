
export const addEvent = (eventName: string, fn: EventListenerOrEventListenerObject, dom: Element | Window = window, options?: boolean | AddEventListenerOptions | undefined) => {
  dom.addEventListener(eventName, fn, options)
}

export const delEvent = (eventName: string, fn: EventListenerOrEventListenerObject, dom: Element | Window = window, options?: boolean | AddEventListenerOptions | undefined) => {
  dom.removeEventListener(eventName, fn, options)
}

// export const createEl (elName: string)

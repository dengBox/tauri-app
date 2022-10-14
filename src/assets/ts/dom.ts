
export const addEvent = (dom: Element | Window = window, eventName: string, fn: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => {
  dom.addEventListener(eventName, fn, options)
}

export const delEvent = (dom: Element | Window = window, eventName: string, fn: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => {
  dom.removeEventListener(eventName, fn, options)
}

// export const createEl (elName: string)

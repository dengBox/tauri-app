enum KeyPress {
  'KeyW' = 'w',
  'KeyA' = 'a',
  'KeyS' = 's',
  'KeyD' = 'd',
  'Space' = 'space',
  'Enter' = 'enter',
  'Escape' = 'esc',
  'ShiftLeft' = 'shiftL'
}

export const getKey = (event: KeyboardEvent) => KeyPress[event.code as keyof typeof KeyPress];
// export const getKey = (event: KeyboardEvent) => (<any>KeyPress)[event.code]

export type Storage = 'sessionStorage' | 'localStorage'

export type TabItem = {
  id: string,
  label: string,
  path: string,
  hideClose?: boolean
}

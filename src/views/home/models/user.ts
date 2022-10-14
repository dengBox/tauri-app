import { BaseMap } from './base-map'
import type { BaseMapOptions } from './base-map'

export default class User extends BaseMap {
  constructor (options: BaseMapOptions) {
    super(options)
    console.log('1111')
  }
}

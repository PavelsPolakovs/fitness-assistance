import { typeOf } from '@TypeChecks'

// This method make check is the passed value is 'function' or not
export const isFunction = (value: any): value is <T>() => T => {
  return typeOf(value) === 'function'
}

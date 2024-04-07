import { typeOf } from '@TypeChecks'

// This method make check is the passed value is 'object' or not
export const isObject = (value: any): value is object => {
  return typeOf(value) === 'object'
}

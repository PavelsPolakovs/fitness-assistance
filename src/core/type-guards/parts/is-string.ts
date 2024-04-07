import { typeOf } from '@TypeChecks'

// This method make check is the passed value is 'string' or not
export const isString = (value: any): value is string => {
  return typeOf(value) === 'string'
}

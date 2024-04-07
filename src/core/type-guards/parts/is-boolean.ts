import { typeOf } from '@TypeChecks'

// This method make check is the passed value is 'boolean' or not
export const isBoolean = (value: any): value is boolean => {
  return typeOf(value) === 'boolean'
}

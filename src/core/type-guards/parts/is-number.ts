import { typeOf } from '@TypeChecks'

// This method make check is the passed value is 'number' or not
export const isNumber = (value: any): value is number => {
  return typeOf(value) === 'number'
}

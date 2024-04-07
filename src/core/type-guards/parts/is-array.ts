import { typeOf } from '@TypeChecks'

// This method make check is the passed value is 'array' or not
export const isArray = <T>(value: any): value is T[] => {
  return typeOf(value) === 'array'
}

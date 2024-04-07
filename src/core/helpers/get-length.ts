import { isString, isArray } from '@TypeGuards'

// This method return the length of ( string or array )
// if the passed value is ( string or array ) otherwise it returns 'null'
export const getLength = (source: string | any[]): number | null => {
  if (isString(source) || isArray(source)) {
    return source.length
  }

  return null
}

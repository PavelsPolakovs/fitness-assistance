import { isArray } from '@TypeGuards'
import { getLength } from '@Helpers'

// This method make check is the passed value is 'array' and it is empty
export const arrayIsEmpty = (value: any): value is [] => {
  if (isArray(value)) {
    const valueLength = getLength(value)

    return valueLength === 0
  }

  return true
}

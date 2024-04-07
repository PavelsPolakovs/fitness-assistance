import { isArray } from '@TypeGuards'
import { getLength } from '@Helpers'

// This method make check is the passed value is 'array' and contains values
export const arrayHasValue = (value: any): value is [] => {
  if (isArray(value)) {
    const valueLength = getLength(value)

    if (valueLength !== null) {
      return valueLength > 0
    }
  }

  return false
}

// This method is an alternative of typeof operator in TypeScript
// Using Object.prototype.toString.call(value) offers a more accurate and reliable way to identify data types.

// Example
// console.log('A: ', typeof a) // A: object
// console.log('B: ', typeof b) // B: object
// console.log('C: ', typeof c) // C: object
//
// console.log('A: ', typeOf(a)) // A: object
// console.log('B: ', typeOf(b)) // B: array
// console.log('C: ', typeOf(c)) // C: null
export const typeOf = (value: any): string | never => {
  const matches: any[] | null = ({}).toString.call(value).match(/\s([a-zA-Z]+)/)

  if (matches !== null) {
    return matches[ 1 ].toLowerCase()
  }

  throw new Error('Can\'t define type')
}

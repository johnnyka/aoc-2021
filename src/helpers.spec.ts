import { toArrayOfNumbers, toArrayOfObjects } from './helpers'

describe('toArrayOfNumbers', () => {
  it('Should return array of numbers', () => {
    const input = '1\n4\n6\n8'

    const result = toArrayOfNumbers(input)
    expect(result).toEqual([1, 4, 6, 8])
  })
})

describe('toArrayOfObjects', () => {
  it('Should return an array of objects', () => {
    const input = 'string1 3\nstring2 7\nstring3 5'

    const result = toArrayOfObjects(input)
    console.log('result:::', result)

    expect(result).toEqual([{ string1: 3 }, { string2: 7 }, { string3: 5 }])
  })
})

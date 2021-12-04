import { input } from './data'

let count = 0
export const countIncreased = () => {
  input.reduce((prev, curr) => {
    curr > prev ? count++ : null
    return curr
  })

  console.log('1a:', count)
  return count
}

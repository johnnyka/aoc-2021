import { readFile } from 'fs/promises'
import path from 'path'
import { toArrayOfNumbers } from '../helpers'

const fileName = path.resolve(__dirname, 'data.txt')

const countIncreased = (data: number[]) => {
  let count = 0
  data.reduce((prev, curr) => {
    curr > prev ? count++ : null
    return curr
  })

  return count
}

export const getIncreased = () =>
  readFile(fileName, 'utf8').then(toArrayOfNumbers).then(countIncreased)

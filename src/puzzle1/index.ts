import { readFile } from 'fs/promises'
import path from 'path'
import { toArrayOfNumbers } from '../helpers'

const fileName = path.resolve(__dirname, 'data.txt')
const getData = () => readFile(fileName, 'utf8').then(toArrayOfNumbers)

const countIncreased = (data: number[]) => {
  let count = 0
  data.reduce((prev, curr) => {
    curr > prev ? count++ : null
    return curr
  })

  return count
}

// Part 1.
export const getIncreased = () => getData().then(countIncreased)

// Part 2.
export const getRefinedIncreased = () =>
  getData()
    .then((data) => {
      const tempArray: number[] = []

      for (let i = 0; i < data.length - 2; i++) {
        tempArray.push(data[i] + data[i + 1] + data[i + 2])
      }
      return tempArray
    })
    .then(countIncreased)

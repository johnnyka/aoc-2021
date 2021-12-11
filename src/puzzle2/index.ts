import { readFile } from 'fs/promises'
import path from 'path'
import { isNil, pipe, pluck, reject, sum } from 'ramda'
import { toArrayOfObjects } from '../helpers'

const fileName = path.resolve(__dirname, 'data.txt')
const getData = () => readFile(fileName, 'utf8').then(toArrayOfObjects)

type Direction = 'forward' | 'down' | 'up'
const getTotalDirection = (data: Record<string, number>[], direction: Direction) =>
  pipe<any, (number | undefined)[], number[], number>(pluck(direction), reject(isNil), sum)(data)

// Part 1.
export const getXYProduct = () =>
  getData().then((data) => {
    const forward = getTotalDirection(data, 'forward')
    const down = getTotalDirection(data, 'down')
    const up = getTotalDirection(data, 'up')

    return forward * (down - up)
  })

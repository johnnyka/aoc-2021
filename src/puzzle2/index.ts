import { readFile } from 'fs/promises'
import path from 'path'
import { isNil, pipe, pluck, reject, sum } from 'ramda'
import { toArrayOfObjects } from '../helpers'

const fileName = path.resolve(__dirname, 'data.txt')
const getData = () => readFile(fileName, 'utf8').then(toArrayOfObjects)

type Direction = 'forward' | 'down' | 'up'
const getTotalDirection = (data: Record<Direction, number>[], direction: Direction) =>
  pipe<any, (number | undefined)[], number[], number>(pluck(direction), reject(isNil), sum)(data)

const getDepth = (data: Record<Direction, number>[]): number => {
  let aim = 0
  let depth = 0

  data.forEach((x) => {
    if (Object.keys(x)[0] === 'down') return (aim += x.down)
    if (Object.keys(x)[0] === 'up') return (aim -= x.up)
    return (depth += x.forward * aim)
  })
  return depth
}

// Part 1.
export const getXYProduct = () =>
  getData().then((data) => {
    const forward = getTotalDirection(data, 'forward')
    const down = getTotalDirection(data, 'down')
    const up = getTotalDirection(data, 'up')

    return forward * (down - up)
  })

// Part 2.
export const getRefinedXYProduct = () =>
  getData().then((data) => {
    const forward = getTotalDirection(data, 'forward')
    const depth = getDepth(data)

    return forward * depth
  })

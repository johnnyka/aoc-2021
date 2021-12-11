export const toArrayOfNumbers = (data: string) => data.split('\n').map(Number)

export const toArrayOfObjects = (data: string) =>
  data.split('\n').map((x) => {
    const temp = x.split(' ')
    return { [temp[0]]: Number(temp[1]) }
  })

import { getIncreased, getRefinedIncreased } from './puzzle1'
import { getXYProduct, getRefinedXYProduct } from './puzzle2'

getIncreased().then((count) => console.log('1, part 1:', count))
getRefinedIncreased().then((count) => console.log('1, part 2:', count))

getXYProduct().then((product) => console.log('2, part 1:', product))
getRefinedXYProduct().then((product) => console.log('2, part 2:', product))

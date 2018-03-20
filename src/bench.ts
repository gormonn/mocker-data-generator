import { Readable } from 'stream'
import { Generator } from './lib/Generator'

const gen = new Generator()

let res
console.time('faker new')
res = gen.faker({ faker: 'lorem.words' })
console.timeEnd('faker new')

console.time('faker eval')
res = gen.faker({ faker: 'lorem.words', eval: true })
console.timeEnd('faker eval')

console.time('chance new')
res = gen.chance({ chance: 'integer' })
console.timeEnd('chance new')

console.time('chance eval')
res = gen.chance({ chance: 'integer', eval: true })
console.timeEnd('chance eval')

console.time('casual new')
res = gen.casual({ casual: 'country' })
console.timeEnd('casual new')

console.time('casual eval')
res = gen.casual({ casual: 'country', eval: true })
console.timeEnd('casual eval')

const load = require('lodash')
const ex = [1,[2,[3,[4,[5,[6]]]]]]
const newex = load.flattenDeep(ex)
console.log(newex)
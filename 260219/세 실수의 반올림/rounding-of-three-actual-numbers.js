const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let result = input.map(i => i.toFixed(3))

let [a,b,c] = result

console.log(a)
console.log(b)
console.log(c)
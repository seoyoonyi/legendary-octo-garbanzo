const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)
let [a, b] = input
let res = a + b

console.log(res.toFixed(2))
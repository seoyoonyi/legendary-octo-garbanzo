const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')
const [a, b] = input
const res = Number(a) + Number(b)

console.log(res)
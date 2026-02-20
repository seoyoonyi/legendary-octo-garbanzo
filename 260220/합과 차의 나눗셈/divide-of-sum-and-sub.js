const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const [a, b] = input
const sum = a+b
const minus = a-b
const res = sum/minus

console.log(res.toFixed(2))
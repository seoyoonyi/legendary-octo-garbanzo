const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)
let [a, b] = input
let multi = a*b
let divi = Math.floor(a/b)

console.log(`${a} * ${b} = ${multi}`)
console.log(`${a} / ${b} = ${divi}`)
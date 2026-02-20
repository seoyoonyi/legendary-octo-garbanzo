const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const sum = input.reduce((a,b)=>a+b)
const average = Math.floor(sum/input.length)

console.log(sum)
console.log(average)
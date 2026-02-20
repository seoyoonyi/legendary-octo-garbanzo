const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('.')
let [a, b, c] = input


console.log(`${b}-${c}-${a}`)
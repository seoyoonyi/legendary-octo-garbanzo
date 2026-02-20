const fs = require('fs')
let result = fs.readFileSync(0).toString().trim().split(' ')
let [a, b] = result

let divi = Math.floor(a/b)
let rest = a%b

console.log(`${divi}...${rest}`)
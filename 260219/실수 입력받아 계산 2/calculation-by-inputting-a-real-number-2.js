const fs = require('fs')
let input = Number(fs.readFileSync(0).toString().trim())
let res = (input+1.5).toFixed(2)

console.log(res)
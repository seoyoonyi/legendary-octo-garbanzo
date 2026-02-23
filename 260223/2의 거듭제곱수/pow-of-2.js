const fs = require('fs')
const input = Number(fs.readFileSync(0).toString().trim());
const result = Math.floor(input/2)

console.log(result)
const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)
let res = 1

for(let i = 1; i<=b; i++){
    res *= a
}

console.log(res)


const fs = require('fs')
const N = Number(fs.readFileSync(0).toString().trim());
let count = 1;
let result = N

for(let i = 1; i<=5000; i++){
    count += 1
    result = Math.floor(result/i)
    if(Math.floor(result/i) < 1) break;
}

console.log(count)
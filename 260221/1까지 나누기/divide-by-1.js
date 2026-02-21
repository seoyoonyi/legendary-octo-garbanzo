const fs = require('fs')
const N = Number(fs.readFileSync(0).toString().trim());
let count = 0;
let result = N;

for(let i = 1; ; i++){
    result = Math.floor(result/i)
    count += 1

    if(result <= 1) break;
}

console.log(count)
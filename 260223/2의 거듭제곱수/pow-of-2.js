const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

let x = 0;
let value = N;

while (value > 1) {
    value /= 2;
    x++;
}

console.log(x);
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let [a,b] = input;
[a,b] = [b,a];

console.log(a)
console.log(b)
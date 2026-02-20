const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let [a,b] = input;

[a,b] = [a+87, b%10]

console.log(a)
console.log(b)

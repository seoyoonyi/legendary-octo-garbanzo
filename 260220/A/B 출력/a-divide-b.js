const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let divi = Math.floor(a/b);
let remain = a%b;
let res = divi + '.'
for(let i = 0; i<20; i++){
    remain *= 10;
    res += Math.floor(remain/b)
    remain %= b
}

console.log(res)
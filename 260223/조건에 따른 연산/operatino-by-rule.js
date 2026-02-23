const fs = require('fs');
let N = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;

while (N < 1000) {
    if (N % 2 === 0) {
        N = N * 3 + 1;
    } else {
        N = N * 2 + 2;
    }
    cnt++;
}

console.log(cnt);
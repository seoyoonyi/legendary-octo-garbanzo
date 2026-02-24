const fs = require('fs')
const N = Number(fs.readFileSync(0).toString().trim())
let isComposite = false;


for (let i = 2; i <= N - 1; i++) {
    if (N % i === 0) {
        isComposite = true;
        break;  
    }
}

if (isComposite) console.log("C");
else console.log("N");
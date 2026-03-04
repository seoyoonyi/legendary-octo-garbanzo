const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());
let str = ""

for(let i = 1; i<= input; i++){
    str = ""
    for(let i = 1; i<= input; i++){
        str += '*'
    }

console.log(str)
}


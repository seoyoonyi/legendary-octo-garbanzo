const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(/\s+/)
let i = 0

while(i<input.length){
    let width = Number(input[i]);
    let height = Number(input[i+1]);
    let ch = input[i+2];

    console.log(width*height)
    
    if (ch === 'C') break;

    i += 3;
}


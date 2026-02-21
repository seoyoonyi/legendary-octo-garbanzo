const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let i = 0;
let count = 0;

while(i < input.length){
    let num = Number(input[i]);
    i++;

    if(num%2 === 0){
        console.log(Math.floor(num/2));
        count++;
    }

    if(count === 3) break;
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let i = 0;
let tempt = [];

while(i < input.length){
    let num = Number(input[i]);
    if(19 < num && num < 30) tempt.push(num)
    i++;
}

let sum = tempt.reduce((a,b) => a+b)
let result = sum/tempt.length


console.log(result.toFixed(2))


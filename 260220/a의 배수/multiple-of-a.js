const fs = require('fs');
const [a,b] = fs.readFileSync(0).toString().trim().split(' ');

let i = 1;

while (i <= a) {
    if(i%b === 0) console.log(1)
    else console.log(0)
    i++;  
}
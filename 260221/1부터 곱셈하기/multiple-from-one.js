const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());
let result = 1;

for(let i = 1; i<=10; i++){
    result *= i
    if(result >= N){
        console.log(i)
        break;
    } 
}



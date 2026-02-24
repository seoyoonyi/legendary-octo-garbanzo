const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number)
let result = false

for(let i = A; i<=B; i++){
    if(1920%i === 0 && 2880%i === 0){
        result = true
        break;
    }
}


if(result) console.log(1)
else console.log(0)
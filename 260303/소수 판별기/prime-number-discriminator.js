const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim())
let result = true

for(let i = 2; i * i <= n; i++){
    if(n%i === 0){
        result = false;
        break;
    }
}

if(!result) console.log('C')
else console.log('P')
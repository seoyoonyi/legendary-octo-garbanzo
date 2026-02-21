const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let i = 0

while(true){
    let num = Number(input[i])

    if(num < 25) console.log('Higher')
    else if(num > 25) console.log('Lower')
    else {
        console.log('Good')
        break;
    }
    i++;
}
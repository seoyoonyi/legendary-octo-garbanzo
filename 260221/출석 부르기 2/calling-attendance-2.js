const fs = require('fs');
let A = fs.readFileSync(0).toString().trim().split('\n');
let i = 0;

while(true){
    let num = Number(A[i]);

    if(num === 1) console.log('John')
    else if(num === 2) console.log('Tom')
    else if(num === 3) console.log('Paul')
    else if(num === 4) console.log('Sam')
    else {
        console.log('Vacancy')
        break;
    }

    i++

}
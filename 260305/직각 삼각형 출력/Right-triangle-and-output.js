const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

for (let j = 1; j <= N; j++) {     
    let str = "";
    for (let i = 1; i <= 2 * j - 1; i++) {   
        str += "*";
    }
    console.log(str);
}
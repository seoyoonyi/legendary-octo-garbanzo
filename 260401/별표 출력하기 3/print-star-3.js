const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i<n; i++){
    const space = ' '.repeat(i*2);
    const star = '* '.repeat(2 * (n-i) -1).trim();
    console.log(space + star)
}
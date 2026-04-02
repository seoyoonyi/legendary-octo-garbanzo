const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i<n; i++){
    const space = ' '.repeat((n - i - 1)*2);
    const star = '* '.repeat(2 * i + 1).trim();
    console.log(space + star)
}
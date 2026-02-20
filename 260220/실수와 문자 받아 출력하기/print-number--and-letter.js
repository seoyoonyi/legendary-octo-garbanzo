const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)
let result = input.map(i => {
    if (!isNaN(i)) {
        return Number(i).toFixed(2);
    } else {
        return i;
    }
});

console.log(result.join('\n'));
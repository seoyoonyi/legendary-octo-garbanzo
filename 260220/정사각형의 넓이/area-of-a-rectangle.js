const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

console.log(input*input)

if(input<5) console.log('tiny')
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let result = input.replace('-', '');

console.log(result)

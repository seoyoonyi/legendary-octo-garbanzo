const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const ok = input.every(x => x % 3 === 0);
console.log(ok ? 1 : 0);
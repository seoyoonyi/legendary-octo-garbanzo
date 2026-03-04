const fs = require('fs')
const [N, M] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let str = ''

for(let i = 1; i<=N; i++){
    for(let z = 1; z<=M; z++){
        str +='*'+' '
    }
        str += '\n'
}

console.log(str)
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let i = 0;

while (true) {
    let n = Number(input[i]);
    if (n === 0) break;

    console.log(n)
    i++;
    
}
const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let product = 1;  

for (let i = a; i <= b; i++) {
    product *= i; 
}

console.log(product);

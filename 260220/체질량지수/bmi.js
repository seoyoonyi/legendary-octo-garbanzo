const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const [h, w] = input

let b = Math.floor((10000*w)/(h*h))


console.log(b)

if (b >= 25) {
    console.log("Obesity");
}




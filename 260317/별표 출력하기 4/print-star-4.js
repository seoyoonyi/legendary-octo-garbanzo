const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = N; i >= 1; i--) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += "* ";
    }
    console.log(str);
}

for (let i = 2; i <= N; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += "* ";
    }
    console.log(str);
}
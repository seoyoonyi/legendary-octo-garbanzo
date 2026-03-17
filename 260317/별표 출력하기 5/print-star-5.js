const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

for (let i = N; i >= 1; i--) {
    let line = "";

    for (let j = 0; j < i; j++) {
        line += "*".repeat(i);
        if (j !== i - 1) line += " ";
    }

    console.log(line);
}
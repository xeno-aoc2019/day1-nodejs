// import ""

import fs from 'fs';
import readline from 'readline';

let input = fs.readFileSync('input.txt');

let readInterface = readline.createInterface({
    input: fs.createReadStream('input.txt')
});

let total_1 = 0;
let total_2 = 0;
readInterface.on('line', (line) => {
    const cargo = parseInt(line);
    const f1 = fuel_1(cargo);
    const f2 = fuel_2(cargo);
    total_1 += f1;
    total_2 += f2;
    console.log(""+ line + " => task1="+f1+" task2="+f2);
});

readInterface.on('close', end => {
    console.log("Answer 1: " + total_1);
    console.log("Answer 2: " + total_2);
});

console.log('100756 => '+fuel_1(100756)+" "+fuel_2(200756));

function fuel_1(mass) {
    if (mass < 9) return 0;
    return Math.floor(mass / 3) - 2;
}

function fuel_2(mass) {
    if (mass < 9) return 0;
    const extra = Math.floor(mass / 3) - 2;
    return extra + fuel_2(extra);
}
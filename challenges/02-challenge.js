let wagaMarka = 95;
let wagaJohna = 85;

let wzrostMarka = 1.88;
let wzrostJohna = 1.75;

let markBMI = wagaMarka / wzrostMarka ** 2;
let johnBMI = wagaJohna / wzrostJohna ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(`Mark's BMI ${Math.round(markBMI)} is higher than John's ${Math.round(johnBMI)}`);
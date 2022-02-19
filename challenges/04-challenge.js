const bill = 275.40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2

console.log(`Your bill is ${tip.toFixed(2)}`);
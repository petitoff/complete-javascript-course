"use strict";

const calcTip = function (bill) {
  if (50 <= bill && bill <= 300) return bill * 0.15;
  else return bill * 0.2;
};

const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArray = [];
const totalsArray = [];

for (let i = 0; i < billsArray.length; i++) {
  const tips = calcTip(billsArray[i]);
  tipsArray.push(tips);
  totalsArray.push(tips + billsArray[i]);
}

console.log(tipsArray);
console.log(totalsArray);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum /= arr.length;
  return sum;
};

console.log(calcAverage(totalsArray));

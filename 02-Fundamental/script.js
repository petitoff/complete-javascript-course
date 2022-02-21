"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;
*/

/*
function logger(){
    console.log('My name is Jonas');
}

logger();
logger();
*/

/*
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(12, 15);
console.log(appleJuice);
*/

// Function declaration
function calcAge1(birtYear) {
  return 2037 - birtYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birtYear) {
  return 2037 - birtYear;
};

const age2 = calcAge2(1991);
console.log(age2);

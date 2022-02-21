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

/*
// Function declaration
const age11 = calcAge1(1991); // It will work

function calcAge1(birtYear) {
  return 2037 - birtYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
// const age22 = calcAge2(1991); // It will not work

const calcAge2 = function (birtYear) {
  return 2037 - birtYear;
};

const age2 = calcAge2(1991);
console.log(age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;

  if (retirement > 0) return `${firstName} retires in ${retirement} years`;
  else return `${firstName} is retired!`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Bob"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  return `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
}
console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  // return retirement;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2028); // old method

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // get last element in array

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schnedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

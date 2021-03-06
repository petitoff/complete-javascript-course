/*
let js = 'amazing';
console.log('Jonas');
// console.log(12 + 30 + 70)

// Variable name conventions
let firstName = 'Matilda';
let PI = 3.1415;
let $function = 27;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
*/

/*
Multiline commant


*/

/*
// Boolean variable
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

// We cannot change value of const var
const age = 30;
// age++; // error
console.log(age);

var job = 'programmer';
job = 'teacher';



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2  ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25

console.log(x);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`)

*/

/*
const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license ❤')
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years!`)
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);
*/

/*
//type conversion
const inputYear = '1999';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coersion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

const age = 18;
if(age === 18) console.log('yes');

console.log(18 === 18);
console.log(18 === '18');
console.log(18 == '18');
console.log(18 === Number('18'));


const favourite = prompt("What's your favourite numbeR?");

if(favourite == 2){
    alert(`Your favourite number is ${favourite}!`);
} else{
    alert(`You don't link 2 :(`)
}

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

*/

/*
const day = 'tuesday';
switch(day){
    case 'monday':  // day === 'monday'
        console.log('Plan course structure.');
        console.log('Go to coding meetup.')
        break;
    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}
*/

// const age = 15;
// const drink = age >= 18 ? 1: 2;
// console.log(drink);

// let drink2;
// if(age => 18){
//     drink2 = 1;
// } else{
//     drink2 = 2;
// }

const age = 18;
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

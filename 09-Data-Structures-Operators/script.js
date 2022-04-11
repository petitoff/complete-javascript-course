"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// String Methods Practice
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(
    40
  );
  console.log(output);
}

/*
// 124. Coding Challenge #4

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd("20")}${"✔".repeat(i + 1)}`);
  }
});
*/

/*
// Working with strings = part 3
// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Błażej Domagała".split(" "));

const [firstName, lastName] = "Błażej Domagała".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  name = name.split(" ");
  const namesUpper = [];

  for (const n of name) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica and smith davis");
capitalizeName("błażej domagała");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Błażej".padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(7365812736472456));
console.log(maskCreditCard("9234726374682371"));

// Repeat
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛫".repeat(n)}`);
};
planeInLine(5);
planeInLine(3);
planeInLine(12);
*/

/*
///////////////////////////////////
// Working with strings - part 2
const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "BłAŻej"; // Błażej
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

const reaperNameOfPassenger = function (namePassenger) {
  return namePassenger.toUpperCase()[0] + namePassenger.toLowerCase().slice(1);
};

console.log(reaperNameOfPassenger(passenger));

// Comparing emails
const email = "hello@blazej.io";
const loginEmail = " Hello@Blazej.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceEUR = "288,97€";
const priceUS = priceEUR.replace("€", "$").replace(",", ".");
console.log(priceEUR, priceUS);

const announcement =
  "All passengers come to barding door 23. Boarding door 23!";
console.log(announcement.replace(/door/g, "gate"));

// Booleans

const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Practice exercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board!");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a packet knife");
checkBaggage("Socks and camera");
checkBaggage("Get some snacks and a gun for protection");
*/

/*
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Błażej"));
console.log(typeof new String("Błażej"));

console.log(new String("Błażej").slice(1));
*/

/*
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct ❤"],
  [false, "Try Again!"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
*/

/*
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
// Sets
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);

console.log(new Set());
console.log(new Set("Jonas"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const oder of ordersSet) console.log(oder);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("BlazejDomagala").size);
*/

/* 
// 114. Looping Objects: Object Keys, Values, and Entries

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
// 113. Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// const users = [];

console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("User array empty");
*/

/*
// 111. Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}

// console.log(...menu.entries());
*/

/*
// 109. Logical Assignment Operators
const rest1 = {
  name: "Capri",
  numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
*/

/*
// 108. The Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish: null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
//107. Short Circuiting (&& and ||)
console.log("---- OR ----");
console.log(3 || "Konas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("---- AND ----");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "jonas");

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
*/

/*
// 106. Rest Pattern and Parameters
// ! 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// ! 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(5, 1, 2, 5, 7, 8, 2, 3, 4, 6, 26, 57, 54);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
*/

/*
////////////////////////////////////
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);

//  Copy array
const newMainCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "s."];
console.log(letters);
console.log(...str);
// console.log(`${...str}`) // This will not work

// Real-world example
const ingredients = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt("let's make pasta! Ingredient 2?"),
  prompt("let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Object
const newRestaurant = { foundIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

// Destructuring Objects
/*
/////////////////////////////////////////
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del sole, 21",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
///////////////////////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

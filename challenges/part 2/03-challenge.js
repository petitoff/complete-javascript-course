"use strict";

// const calcBmi = function (mass, height) {
//   return mass / height ** 2;
// };

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBmi();
john.calcBmi();

console.log(mark.bmi, john.bmi);
if (mark.bmi > john.bmi) {
  console.log(
    `Mark's BMI (${mark.bmi.toFixed(
      2
    )}) is higher than John's (${john.bmi.toFixed(2)})!`
  );
} else {
  console.log(
    `John's BMI (${john.bmi.toFixed(
      2
    )}) is higher than Mark's (${mark.bmi.toFixed(2)})!`
  );
}

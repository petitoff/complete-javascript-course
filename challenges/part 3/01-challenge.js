"use strict";

const printForecast = function (arr) {
  let day = 1;
  let stringOutput = "... ";
  for (let i = 0; i < arr.length; i++) {
    stringOutput +=
      String(arr[i]) + ` ºC in ${day} day${day === 1 ? "" : "s"} ... `;
    day++;
  }
  console.log(stringOutput);
};

printForecast([12, 5, -5, 0, 4]);

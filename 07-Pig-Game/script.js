"use strict";

// Selecting elements
const scoreElement0 = document.querySelector("#score--0");
const scoreElement1 = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");

// Starting conditions
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
diceElement.classList.add("hidden");

"use strict";

// Selecting elements
const scoreElement0 = document.querySelector("#score--0");
const scoreElement1 = document.getElementById("score--1");
const currentElement0 = document.getElementById("current--0");
const currentElement1 = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
diceElement.classList.add("hidden");

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    currentElement0.textContent = currentScore; // ! Change later
  } else {
    // switch to next player
  }
});

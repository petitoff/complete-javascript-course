"use strict";

// Selecting elements
const playerElement0 = document.querySelector(".player--0");
const playerElement1 = document.querySelector(".player--1");

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

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isGameActive = true;

const changeCurrentScore = function (itWillBeDisplayed) {
  document.getElementById(`current--${activePlayer}`).textContent =
    itWillBeDisplayed;
};

const changeActivePLayer = function () {
  changeCurrentScore(0);
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerElement0.classList.toggle("player--active");
  playerElement1.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (!isGameActive) return;

  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    changeCurrentScore(currentScore);

    // currentElement0.textContent = currentScore; //// Change later
  } else {
    // switch to next player
    changeActivePLayer();
  }
});

btnHold.addEventListener("click", function () {
  if (!isGameActive) return;

  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if player's score is >= 100
  if (scores[activePlayer] >= 5) {
    isGameActive = false;
    diceElement.classList.add("hidden");

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    //  Switch to another player
    changeActivePLayer();
  }
});

btnNew.addEventListener("click", function () {
  scores = [0, 0];
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;

  currentScore = 0;
  changeCurrentScore(currentScore);

  playerElement0.classList.add("player--active");

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  diceElement.classList.remove("hidden");

  diceElement.classList.add("hidden");
  activePlayer = 0;
  isGameActive = true;
});

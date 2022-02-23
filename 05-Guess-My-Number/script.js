"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber;
const generateSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
generateSecretNumber();
document.querySelector(".number").textContent = secretNumber;

// Take a startup value from HTML
const scoreStartValue = Number(document.querySelector(".score").textContent);
let score = scoreStartValue;
const changeScoreValue = function () {
  if (score !== 0) {
    score--;
    document.querySelector(".score").textContent = score; // displays the changed score to the user
  }
};

let highScore = 0;
const changeHightScore = function (score) {
  document.querySelector(".highscore").textContent = score;
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  /* 
  ! I corrected the version from the course. 
  * It had a bug in identifying the number 0 as not a number because 
  * converting an empty string to a number in JS produces the number 0.
  */

  if (document.querySelector(".guess").value == "") {
    // when is no input
    displayMessage("No number!");
  } else if (guess === secretNumber) {
    // When player wins
    displayMessage("Correct Number!");

    // Change css style
    document.querySelector("body").style.backgroundColor = "#60b347"; // Change color to green (#60b347)
    document.querySelector(".number").style.width = "30rem"; // Change width of rectangle
    if (score > highScore) {
      changeHightScore(score);
    }
  } else if (score > 1) {
    // Check if the score is greater than 1
    displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    changeScoreValue();
  } else {
    changeScoreValue();
    displayMessage("You lost the game!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  generateSecretNumber();
  score = scoreStartValue;
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});

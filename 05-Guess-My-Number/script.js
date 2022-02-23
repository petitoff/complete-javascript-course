"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

// Take a startup value from HTML
let score = Number(document.querySelector(".score").textContent);

const changeScoreValue = function () {
  score--;
  document.querySelector(".score").textContent = score; // displays the changed score to the user
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
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    // When player wins
    document.querySelector(".message").textContent = "Correct Number!";

    // Change css style
    document.querySelector("body").style.backgroundColor = "#60b347"; // Change color to green (#60b347)
    document.querySelector(".number").style.width = "30rem"; // Change width of rectangle
  } else if (score > 1) {
    // Check if the score is greater than 1
    if (guess > secretNumber) {
      // if score > 1 then give message to user and decrease score value by 1
      document.querySelector(".message").textContent = "Too high!";
      changeScoreValue();
    } else if (guess < secretNumber) {
      // if score > 1 then give message to user and decrease score value by 1
      document.querySelector(".message").textContent = "Too low!";
      changeScoreValue();
    }
  } else {
    changeScoreValue();
    document.querySelector(".message").textContent = "You lost the game!";
  }
});

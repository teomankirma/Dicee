"use strict";

// Selectors
const player1Image = document.querySelector(".img1");
const player2Image = document.querySelector(".img2");
const h1 = document.querySelector("h1");

// Generating a random number between 1 and 6
const randomNumber1 = Math.round(Math.random() * 5) + 1;
player1Image.setAttribute("src", `images/dice${randomNumber1}.png`);

const randomNumber2 = Math.round(Math.random() * 5) + 1;
player2Image.setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) h1.textContent = "🚩 Player 1 Wins!";
else if (randomNumber1 < randomNumber2) h1.textContent = "Player 2 Wins! 🚩";
else h1.textContent = "Draw!";

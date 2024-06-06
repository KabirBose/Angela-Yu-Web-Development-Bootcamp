const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const p1Dice = document.querySelector(".img1");
const p2Dice = document.querySelector(".img2");
const winner = document.querySelector(".winner");

p1Dice.setAttribute("src", `./images/dice${randomNumber1}.png`);
p2Dice.setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) winner.innerHTML = "P1 Wins!";
else if (randomNumber1 === randomNumber2) winner.innerHTML = "Draw!";
else winner.innerHTML = "P2 Wins!";

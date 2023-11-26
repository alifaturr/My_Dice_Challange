// Player 1's dice
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");

// Player 2's dice
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// Result
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
}
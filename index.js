let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");
let title = document.querySelector("h1");
if (randomNumber1 < randomNumber2) {
  title.innerHTML = "Player 2 Wins!";
} else if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 Wins!";
} else {
  title.innerHTML = "Draw!";
}
if (randomNumber1 !== randomNumber2) {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
  });
}

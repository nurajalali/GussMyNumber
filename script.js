let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".guide-client").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-num").value);

  //when there is no input
  if (!guess) {
    displayMessage("⛔️put number");

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("😍you win");

    document.querySelector("body").style.backgroundColor = "#4d4949";
    document.querySelector(".number").style.backgroundColor = "#756c6d";
    document.querySelector(".number").style.width = "5rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "❌It's greater than the number"
          : "❌It's lower than the number"
      );

      score--;
      displayScore(score);
    } else {
      displayMessage("you lose😕");
      displayScore(0);
    }
  }
});

document.querySelector(".btn-try-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess-num").value = "";
  displayMessage("start guessing ...");
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#212121";
  document.querySelector(".number").style.backgroundColor = "#7aeb87";
  console.log(secretNumber);
});

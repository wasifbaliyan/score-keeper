let player1 = document.querySelector(".p1");
let player2 = document.querySelector(".p2");
let reset = document.querySelector(".reset");
let score1 = document.querySelector(".one");
let score2 = document.querySelector(".two");
let inputScore = document.querySelector("input");
let maxScore = document.querySelector(".scoreUpTo");
let gameOver = false;
let winningScore = 5;

player1.addEventListener("click", function () {
  if (!gameOver) {
    score1.textContent++;
    if (score1.textContent == winningScore) {
      gameOver = true;
      score1.classList.add("success");
      alert("Player 1 is the winner");
    }
  }
});
player2.addEventListener("click", function () {
  if (!gameOver) {
    score2.textContent++;
    if (score2.textContent == winningScore) {
      gameOver = true;
      score2.classList.add("success");
      alert("Player 2 is the winner");
    }
  }
});
function resetGame() {
  score1.textContent = 0;
  score2.textContent = 0;
  gameOver = false;
  score1.classList.remove("success");
  score2.classList.remove("success");
}
reset.addEventListener("click", function () {
  resetGame();
});

inputScore.addEventListener("change", function () {
  maxScore.textContent = this.value;
  winningScore = Number(this.value);
  resetGame();
});

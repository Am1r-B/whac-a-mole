const squares = document.querySelectorAll(".square");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");

let result = 0;
let hitPosition;
let currentTime = 60;
let randomTimerIntervalId = null;
let countDownIntervalId = setInterval(countDown, 1000);

moveMole();

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  randomTimerIntervalId = setInterval(randomSquare, 500);
}

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime <= 0) {
    clearInterval(randomTimerIntervalId);
    clearInterval(countDownIntervalId);
    hitPosition = null;
    alert("GAME OVER! Your final score is " + result);
  }
}

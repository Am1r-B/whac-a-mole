const squares = document.querySelectorAll(".square");
const score = document.getElementById("score");

let result = 0;
let hitPosition;

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
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

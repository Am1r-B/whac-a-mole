const squares = document.querySelectorAll(".square");

moveMole();

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 500);
}

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomPosition = squares[Math.floor(Math.random() * squares.length)];
  randomPosition.classList.add("mole");
}

const squares = document.querySelectorAll(".square");

randomSquare();

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomPosition = squares[Math.floor(Math.random() * squares.length)];
  randomPosition.classList.add("mole");
}

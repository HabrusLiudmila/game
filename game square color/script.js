const board = document.querySelector("#board");
const colors = ["#F47C7C", "#F7F48B", "#A1DE93", "#70A1D7", "#E6A4B4"];
const SQUARES_NUMBER = 405;

//здесь долен был быть код на вычесление SQUARES_NUMBER чтоб путь перед курсором появлялся а не был виден сразу, но вернусь к этому когда получу больше знаний в этой области)


for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

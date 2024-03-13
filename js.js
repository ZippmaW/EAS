"use strict";

const container = document.createElement("mainDiv");
const button = document.createElement("button");
button.textContent = "Grid Select";
container.id = "main";
document.addEventListener("DOMContentLoaded", function () {
  document.body.append(button, container);
});

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");

  container.appendChild(square);

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
}

button.addEventListener("click", () => {
  let gridNum = prompt(
    "Enter the number of squares for your grid (maximum of 100"
  );
  if (gridNum > 100) {
    gridNum = prompt(
      "Invalid number, enter a valid number of squares for your grid"
    );
    createGrid(gridNum);
  }
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createGrid(gridNum);
});

function createGrid(number) {
  const grid = number * number;
  for (let i = 0; i < grid; i++) {
    const square = document.createElement("div");
    const dimension = 800 / number + "px";

    container.appendChild(square);

    square.style.width = dimension;
    square.style.height = dimension;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  }
}

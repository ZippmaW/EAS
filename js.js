"use strict";

const container = document.createElement("mainDiv");
const button = document.createElement("button");
const rgbString = ``;
button.textContent = "Grid Select";
container.id = "main";
document.addEventListener("DOMContentLoaded", function () {
  document.body.append(button, container);
});

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");

  container.appendChild(square);
  square.style.filter = "brightness(100%)";

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = randomRGB();
    square.style.filter = `${darkenSquare(square)}`;
    getBrightness(square);
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

    square.style.filter = "brightness(100%)";

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = randomRGB();
      square.style.filter = `${darkenSquare(square)}`;
      getBrightness(square);
    });
  }
}

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function darkenSquare(square) {
  let compStyle = window.getComputedStyle(square);
  let filterNum2 = "";
  let filterNum =
    compStyle
      .getPropertyValue("filter")
      .slice(11, compStyle.getPropertyValue("filter").length - 1) * 100;
  if (filterNum > 0) {
    filterNum -= 10;
    filterNum2 = `brightness(${filterNum}%)`;
    return filterNum2;
  }
}

function getBrightness(square) {
  let testStyle = window.getComputedStyle(square);
  let testNum =
    testStyle
      .getPropertyValue("filter")
      .slice(11, testStyle.getPropertyValue("filter").length - 1) * 100;
  console.log(testNum);
}

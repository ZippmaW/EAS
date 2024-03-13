"use strict";

const container = document.createElement("mainDiv");
container.id = "main";
document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(container);
});

for (let i = 0; i < 256; i++) {
  container.appendChild(document.createElement("div"));
}

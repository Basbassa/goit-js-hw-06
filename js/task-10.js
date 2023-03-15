function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
  const padding = "0.5rem";

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginBottom = padding;
    boxes.appendChild(div);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

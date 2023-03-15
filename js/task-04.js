const counterValue = document.querySelector("#value");
let count = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  counterValue.textContent = count;
});

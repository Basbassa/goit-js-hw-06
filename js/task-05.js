const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() !== "") {
    nameOutput.textContent = nameInput.value.trim();
  } else {
    nameOutput.textContent = "Anonymous";
  }
});

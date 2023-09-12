
const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", function () {
  const expectedLength = parseInt(inputElement.getAttribute("data-length"));
  const actualLength = inputElement.value.length;

  inputElement.classList.toggle("valid", actualLength === expectedLength);
  inputElement.classList.toggle("invalid", actualLength !== expectedLength);
  console.log(inputElement.value);
});

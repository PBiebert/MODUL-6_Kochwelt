"use strict";

// This code updates all elements with the class "crowd" based on the value entered in the input field.
// When the button is clicked, it multiplies each element's data-crowd attribute by the input value.
// If the result is 0, the element's text is cleared; otherwise, the calculated value is displayed.

const quantityElements = document.querySelectorAll(".crowd");
const quantitiesInput = document.querySelector("#quantitiesNumber");
const calculateButton = document.querySelector("#button");

calculateButton.addEventListener("click", () => {
  quantityElements.forEach(calculateIngredients);
});

function calculateIngredients(crowd) {
  const base = Number(crowd.dataset.crowd);
  const factor = Number(quantitiesInput.value);

  if (crowd.dataset.crowd == 0) {
    crowd.innerText = "";
  } else {
    crowd.innerText = base * factor;
  }
}

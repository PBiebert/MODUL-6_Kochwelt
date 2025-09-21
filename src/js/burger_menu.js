"use strict";

const button = document.querySelector(".burger_menu");
const navList = document.querySelector(".mobileNav");

button.addEventListener("click", navActive);

function navActive() {
  button.classList.toggle("active");
  navList.classList.toggle("active");
}

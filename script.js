const hamMenu = document.querySelector(".ham-menu");

const mobileMenu = document.querySelector(".mobile__menu");
const navList = document.querySelector(".nav__list");

const body = document.querySelector("body");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  navList.classList.toggle("active");
  body.classList.toggle("active");
});

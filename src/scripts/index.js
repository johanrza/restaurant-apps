import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

const navToggle = document.querySelector(".nav-title__toggle");
const links = document.querySelector(".nav-item");
const main = document.querySelector("main");
const hero = document.querySelector(".hero-image");

navToggle.addEventListener("click", function (event) {
  links.classList.toggle("show_nav");
  event.stopPropagation();
});

main.addEventListener("click", function () {
  links.classList.remove("show_nav");
});

hero.addEventListener("click", function () {
  links.classList.remove("show_nav");
});

import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../sass/responsive.sass";
import main from "./main.js";

const navToggle = document.querySelector(".nav-title__toggle");
const links = document.querySelector(".nav-item");
const mainEL = document.querySelector("main");
const hero = document.querySelector(".hero-image");

navToggle.addEventListener("click", function (event) {
  links.classList.toggle("show_nav");
  event.stopPropagation();
});

mainEL.addEventListener("click", function () {
  links.classList.remove("show_nav");
});

hero.addEventListener("click", function () {
  links.classList.remove("show_nav");
});

main();

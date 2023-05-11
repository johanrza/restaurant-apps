import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../sass/responsive.sass';
import main from './main';

const navToggle = document.querySelector('.nav-title__toggle');
const links = document.querySelector('.nav-item');
const mainEL = document.querySelector('main');
const hero = document.querySelector('.hero-image');

navToggle.addEventListener('click', (event) => {
  links.classList.toggle('show_nav');
  event.stopPropagation();
});

mainEL.addEventListener('click', () => {
  links.classList.remove('show_nav');
});

hero.addEventListener('click', () => {
  links.classList.remove('show_nav');
});

main();

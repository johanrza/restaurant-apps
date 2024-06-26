import 'regenerator-runtime';
import '../styles/main.css';
import '../sass/responsive.sass';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.nav-title__toggle'),
  drawer: document.querySelector('.nav-item'),
  content: document.querySelector('main'),
  body: document.querySelector('body'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#maincontent');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

const heroStatus = localStorage.getItem('heroStatus');
const hero = document.querySelector('#hero');

if (heroStatus === 'hidden' && hero) {
  hero.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.location.hash === '') {
    hero.style.display = '';
    localStorage.setItem('heroStatus', 'visible');
  }
});

window.addEventListener('hashchange', () => {
  if (document.location.hash.includes('detail') || document.location.hash.includes('favorite')) {
    if (hero) {
      hero.style.display = 'none';
      localStorage.setItem('heroStatus', 'hidden');
    }
  } else if (hero) {
    hero.style.display = '';
    localStorage.setItem('heroStatus', 'visible');
  }
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

import 'regenerator-runtime';
import '../styles/main.css';
import '../sass/responsive.sass';
import App from './views/app';

const app = new App({
  button: document.querySelector('.nav-title__toggle'),
  drawer: document.querySelector('.nav-item'),
  content: document.querySelector('main'),
  body: document.querySelector('body'),
});

const heroStatus = localStorage.getItem('heroStatus');
const hero = document.querySelector('#hero');

if (heroStatus === 'hidden' && hero) {
  hero.style.display = 'none';
}

window.addEventListener('hashchange', () => {
  if (document.location.hash.includes('detail')) {
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
});

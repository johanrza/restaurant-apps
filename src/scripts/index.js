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

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

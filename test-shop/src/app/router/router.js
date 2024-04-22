// import { parseRoute } from './lib/parseRoute';
import { renderPage } from './lib/renderPage';
import { ROUTES } from './lib/routes';

class Router {
  constructor() {
    this.init();
  }

  init() {
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });
    this.handleRoute();
    this.manualRoute();
  }

  route(e) {
    const event = e || window.e;
    event.preventDefault();
  }

  handleRoute() {
    const path = window.location.pathname;
    const route = ROUTES[path] || ROUTES[404];
    const { pageName } = route;
    console.log('path from handleLocation =>', path);
    renderPage(pageName);
  }

  manualRoute() {
    const navItems = document.querySelectorAll('.nav__item');
    navItems.forEach((navItem) => {
      navItem.addEventListener('click', (e) => {
        const target = e.target.closest('.nav__item');
        const path = target.querySelector('a').pathname;
        this.setState(path);
        this.handleRoute();
        e.preventDefault();
      });
    });
  }

  setState(path) {
    window.history.pushState({ pageName: ROUTES[path] }, ``, path);
  }
}
export const router = () => new Router();

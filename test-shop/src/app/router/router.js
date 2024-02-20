import { parseRoute } from './lib/parseRoute';
// import { renderPage } from './lib/renderPage';
import { ROUTES } from './lib/routes';
// import { page } from '../../pages/page.home';

class Router {
  constructor() {
    this.init();
  }

  init() {
    this.setState();
    const path = parseRoute();
    console.log(path);
    // this.manualRoute();
    this.handleRoute(path);
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });
  }

  async handleRoute(path) {
    const pathRoute = path || parseRoute();
    const { pageName } = ROUTES[pathRoute];
    const pageTemplate = await this.getPage(pageName);
    console.log('pageTemplate', pageTemplate);
    // renderPage(pageTemplate);
    // if (path) this.setState(path);
  }

  async getPage(pageName) {
    const path = `../../pages/page.${pageName}`;
    const { page } = await import(`${path}`);
    console.log('page', page);
    return page();
  }

  setState(path) {
    window.history.pushState({ pageName: ROUTES[path] }, ``, path);
  }

  // manualRoute() {
  //   const navItems = document.querySelectorAll('.nav__item');
  //   navItems.forEach((navItem) => {
  //     navItem.addEventListener('click', (e) => {
  //       const target = e.target.closest('.nav__item');
  //       const path = target.querySelector('a').pathname;
  //       this.handleRoute(path);
  //       e.preventDefault();
  //     });
  //   });
  // }
}
export const router = () => new Router();

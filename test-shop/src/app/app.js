import { layout } from './index';
import { router } from './router/router';

class App {
  constructor() {
    this.init();
  }

  init() {
    layout();
    router();
  }
}

export { App };

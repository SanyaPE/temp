import { layout } from '../widgets/index';
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
export default App;

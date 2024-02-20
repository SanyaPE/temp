import { header, main, footer, nav, btnBurger } from '../../shared/ui/index';
import { toggleMenuBtns } from '../../features/index';
import './style.scss';

export const layout = () => {
  const body = document.querySelector('body');
  const app = document.createElement('div');
  app.setAttribute('id', 'app');
  app.insertAdjacentHTML('beforeEnd', header(nav, btnBurger));
  app.insertAdjacentHTML('beforeEnd', main());
  app.insertAdjacentHTML('beforeEnd', footer());
  body.append(app);
  toggleMenuBtns();
};

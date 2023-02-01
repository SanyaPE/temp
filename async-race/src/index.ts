import './assets/scss/main.scss';

import App from './components/App/app';
import Layout from './components/Layout/layout';

const app = new App();
const layout = new Layout();

document.addEventListener('DOMContentLoaded', () => {
    layout.init();
    app.init();
});

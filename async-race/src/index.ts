import './assets/scss/main.scss';

import App from './components/App';
import Layout from './components/Layout';

const app = new App();
const layout = new Layout();

document.addEventListener('DOMContentLoaded', () => {
    layout.init();
    app.init();
});

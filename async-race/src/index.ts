import App from './components/app';
import './assets/scss/main.scss';
import Layout from './components/layout';

const app = new App();
const layout = new Layout();
document.addEventListener('DOMContentLoaded', () => {
    layout.init();
    app.init();
});

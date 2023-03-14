import View from '../views/View.js';
import Models from '../models/Models.js';

export default {
    routerPage(page, params) {
        const cardsData = Models.getCards(params);
        const dataPage = Models.getPages(page);
        View.renderPage(dataPage);
    },
    routerLayout() {
        const layout = Models.getLayout();
        layout.forEach((elem) => View.renderLayout(elem));
    },
};

import { COMPONENTS } from '../utils/const.js';

export default {
    body: document.querySelector('body'),
    elements: {
        currentPage: null,
    },
    pages: null,
    layout: false,
    getCards(params) {},
    getPages(page) {
        return COMPONENTS[page];
    },
    getLayout() {
        if (!this.layout) {
            this.layout = true;
            return [COMPONENTS.header, COMPONENTS.main, COMPONENTS.footer];
        } else return false;
    },
};

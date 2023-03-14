import { Component } from './Component.js';
const ELEMENTS = {};

export default {
    async renderLayout(dataLayout) {
        new Component(dataLayout).init();
    },
    async renderPage(dataPage) {
        const MAIN = document.querySelector('main');
        const { selector } = dataPage;
        if (ELEMENTS[selector]) {
            MAIN.innerHTML = '';
            MAIN.appendChild(ELEMENTS[selector]);
        } else if (MAIN) {
            MAIN.innerHTML = '';
            new Component(dataPage).init().then((page) => {
                ELEMENTS[selector] = page;
            });
        } else {
            new Component(dataPage).init().then((page) => {
                ELEMENTS[selector] = page;
            });
        }
    },
    renderCard(data) {},
};

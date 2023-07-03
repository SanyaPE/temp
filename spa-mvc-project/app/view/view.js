import { i18nObj } from '../models/language.js';

export class View {
    constructor(controller) {
        this.controller = controller;
    }
    getModels(template) {
        const tempElement = document.createElement('template');
        tempElement.innerHTML = template;
        const fragment = tempElement.content;
        return fragment.firstElementChild;
    }
    translate(element, lang) {
        const dataList = element.querySelectorAll('[data-i18n]');
        dataList.forEach((item) => {
            item.textContent = i18nObj[lang][item.dataset.i18n];
        });
        return element;
    }
    setActiveBtn(page) {
        const nav = document.querySelector('.nav');
        const btns = nav.querySelectorAll('[data-i18n]');
        btns.forEach((btn) => {
            console.log(btn.dataset.i18n.slice(4));
            if (btn.dataset.i18n.slice(4) === page) {
                btn.classList.add('active');
            }
        });
    }
}

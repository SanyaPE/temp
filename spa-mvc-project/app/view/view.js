import { HEADER } from './components/header.component.js';
import { FOOTER } from './components/footer.component.js';
import { MAIN } from './components/main.component.js';
import { KEYBOARD__PAGE } from './components/keyboard.page.js';
import { GALLERY__PAGE } from './components/gallery.page.js';
import { ABOUT__PAGE } from './components/about.page.js';
import { Element } from './utils/Element.js';
import { Controller } from '../controller/controller.js';
import { Models } from '../models/Models.js';
import { i18nObj } from '../models/language.js';

const LAYOUT = [HEADER, MAIN, FOOTER];
const PAGES = {
    keyboard: KEYBOARD__PAGE,
    about: ABOUT__PAGE,
    gallery: GALLERY__PAGE,
};

export class View {
    constructor(controller) {
        this.body = document.querySelector('body');
        this.controller = controller;
        this.init();
    }
    init() {
        console.log('start view');
        // this.getSettings();
        this.renderLayout();
        // this.controlPage();
        this.toggleLang();
        this.toggleNavigation();
    }

    renderLayout() {
        LAYOUT.forEach((item) => {
            this.body.insertAdjacentHTML('beforeend', this.getModels(item));
        });
    }
    getModels(template) {
        const tempElement = document.createElement('div');
        tempElement.insertAdjacentHTML('beforeend', template);
        const dataList = tempElement.querySelectorAll('[data-i18n]');
        const { lang, page } = this.controller.getSettings();
        dataList.forEach((item) => {
            item.textContent = i18nObj[lang][item.dataset.i18n];
        });
        return tempElement.innerHTML;
    }

    selectPageController() {
        this.controller.selectPageController();
    }

    // controlPage() {
    //     const nav = this.body.querySelector('.nav');
    //     nav.addEventListener('click', (e) => {
    //         const target = e.target;
    //         const page = target.innerHTML;
    //         console.log(page);
    //         // this.controller.setPage(page);
    //     });
    // }
    toggleLang() {
        const langBtn = this.body.querySelector('.lang__btn');
        langBtn.addEventListener('click', (e) => {
            const target = e.target;
            const lang = target.innerHTML;
            this.controller.setLang(lang);
            target.innerHTML = target.innerHTML === 'ru' ? 'en' : 'ru';
            this.translate(target.innerHTML);
        });
    }
    toggleNavigation() {
        const nav = this.body.querySelector('.nav');
        const navBtns = nav.querySelectorAll('.nav__btn');
        nav.addEventListener('click', (event) => {
            const target = event.target;
            const page = target.textContent;
            navBtns.forEach((btn) => {
                btn === target ? btn.classList.add('active') : btn.classList.remove('active');
            });
            console.log('page-1', page);
            this.controller.setPage(page);
        });
    }
    translate(lang) {
        const dataList = document.querySelectorAll('[data-i18n]');
        dataList.forEach((elem) => {
            // console.log(elem.textContent);
            // console.log(elem.dataset.i18n);
            elem.textContent = i18nObj[lang][elem.dataset.i18n];
        });
    }
    renderKeyboard() {}
    renderElement() {
        const parent = document.querySelector('header');
        const element = new Element('div', ['inner', 'div__inner']);
        console.log(element);
        parent.appendChild(element.create());
        // element.appendToElement(parent);
    }
}

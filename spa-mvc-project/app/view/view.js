import { FOOTER } from './components/footer.component.js';
import { MAIN } from './components/main.component.js';
import { HEADER } from './components/header.component.js';
import { KEYBOARD__PAGE } from './components/keyboard.page.js';
import { GALLERY__PAGE } from './components/gallery.page.js';
import { ABOUT__PAGE } from './components/about.page.js';
import { Element } from './utils/Element.js';
import { Controller } from '../controller/controller.js';
import { Models } from '../models/Models.js';

export class View {
    constructor(settings) {
        this.body = document.querySelector('body');
    }
    init() {
        console.log('start view');
        this.renderLayout();
        this.controlPage();
        this.controlLang();
        this.toggleNavigation();
    }
    renderLayout() {
        this.body.insertAdjacentHTML('beforeend', HEADER);
        this.body.insertAdjacentHTML('beforeend', MAIN);
        this.body.insertAdjacentHTML('beforeend', FOOTER);
    }
    presetting(settings) {
        const { page, lang } = settings;
        const langBtn = this.body.querySelector('.lang__btn');
        const navBtns = this.body.querySelectorAll('.nav__btn');
        langBtn.textContent = lang;
        navBtns.forEach((btn) => {
            if (btn.textContent === page) btn.classList.add('active');
        });
    }
    toggleNavigation() {
        const nav = this.body.querySelector('.nav');
        const navBtns = nav.querySelectorAll('.nav__btn');
        nav.addEventListener('click', (event) => {
            const target = event.target;
            navBtns.forEach((btn) => {
                btn === target ? btn.classList.add('active') : btn.classList.remove('active');
            });
            this.renderPage(target.textContent);
        });
    }
    renderPage(page) {
        const main = this.body.querySelector('#main');
        const pages = {
            keyboard: KEYBOARD__PAGE,
            about: ABOUT__PAGE,
            gallery: GALLERY__PAGE,
        };
        // this.pages = { `${page}`: 'hui' };
        console.log('page', page);
        console.log('this', this);
        console.log('this.pages[page]', this.pages[page]);
        // if (this.page[page]) main.innerHTML = this.page[page];
        // else {
        //     main.innerHTML = '';
        //     main.insertAdjacentHTML('beforeend', pages[page]);
        // }
    }
    // renderPage() {
    //     const main = this.body.querySelector('#main');
    //     main.innerHTML = '';
    //     if (this.settings.page === 'keyboard') {
    //         main.insertAdjacentHTML('beforeend', KEYBOARD__PAGE);
    //     }
    //     if (this.settings.page === 'gallery') {
    //         main.insertAdjacentHTML('beforeend', GALLERY__PAGE);
    //     }
    // }
    controlPage() {
        const nav = this.body.querySelector('.nav');
        nav.addEventListener('click', (e) => {
            const target = e.target;
            const page = target.innerHTML;
            Controller.setPage(page);
        });
    }
    controlLang() {
        const langBtn = this.body.querySelector('.lang__btn');
        langBtn.addEventListener('click', (e) => {
            const target = e.target;
            target.innerHTML = target.innerHTML === 'ru' ? 'en' : 'ru';
            Controller.setLang(target.innerHTML);
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

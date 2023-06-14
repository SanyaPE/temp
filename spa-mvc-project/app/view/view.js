import { FOOTER } from './components/footer.component.js';
import { MAIN } from './components/main.component.js';
import { HEADER } from './components/header.component.js';
import { KEYBOARD__PAGE } from './components/keyboard.page.js';
import { GALLERY__PAGE } from './components/gallery.page.js';
import { Element } from './utils/Element.js';
import { Controller } from '../controller/controller.js';
import { Models } from '../models/Models.js';

export class View {
    constructor(settings) {
        this.body = document.querySelector('body');
        this.settings = settings;
    }
    init() {
        console.log('start view');
        this.renderLayout();
        this.renderPage();
        this.controlPage();
        this.controlLang();
    }
    renderLayout() {
        const header = HEADER.replace(/{{lang}}/gi, this.settings.lang);
        this.body.insertAdjacentHTML('beforeend', header);
        this.body.insertAdjacentHTML('beforeend', MAIN);
        this.body.insertAdjacentHTML('beforeend', FOOTER);
    }
    renderPage() {
        const main = this.body.querySelector('#main');
        main.innerHTML = '';
        if (this.settings.page === 'keyboard') {
            main.insertAdjacentHTML('beforeend', KEYBOARD__PAGE);
        }
        if (this.settings.page === 'gallery') {
            main.insertAdjacentHTML('beforeend', GALLERY__PAGE);
        }
    }
    controlPage() {
        const nav = this.body.querySelector('.nav');
        nav.addEventListener('click', () => {
            console.log(this);
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

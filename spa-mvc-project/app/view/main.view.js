import { HEADER } from './components/header.component.js';
import { FOOTER } from './components/footer.component.js';
import { MAIN } from './components/main.component.js';
import { KEYBOARD__PAGE } from './components/keyboard.page.js';
import { GALLERY__PAGE } from './components/gallery.page.js';
import { ABOUT__PAGE } from './components/about.page.js';
import { Element } from './utils/Element.js';
import { View } from './view.js';

const LAYOUT = [HEADER, MAIN, FOOTER];
const PAGES = {
    keyboard: KEYBOARD__PAGE,
    about: ABOUT__PAGE,
    gallery: GALLERY__PAGE,
};

export class MainView extends View {
    constructor(controller) {
        super(controller);
        this.parent = document.querySelector('body');
        this.init();
    }
    init() {
        this.renderLayout();
        this.toggleLang();
        this.toggleNavigation();
    }

    renderLayout() {
        const { lang } = this.controller.getSettings();
        LAYOUT.forEach((item) => {
            const element = this.getModels(item);
            this.parent.append(this.translate(element, lang));
        });
    }

    selectPageController() {
        this.controller.selectPageController();
    }

    toggleLang() {
        const langBtn = this.parent.querySelector('.lang__btn');
        langBtn.addEventListener('click', (e) => {
            const target = e.target;
            const { lang } = this.controller.getSettings();
            const targetLang = lang === 'ru' ? 'en' : 'ru';
            this.controller.setLang(targetLang);
            target.textContent = lang;
            this.translate(this.parent, targetLang);
        });
    }

    toggleNavigation() {
        const nav = this.parent.querySelector('.nav');
        const navBtns = nav.querySelectorAll('.nav__btn');
        nav.addEventListener('click', (event) => {
            const target = event.target;
            const page = target.textContent;
            navBtns.forEach((btn) => {
                btn === target ? btn.classList.add('active') : btn.classList.remove('active');
            });
            this.controller.setPage(page);
            this.controller.selectPageController();
        });
    }
    renderKeyboard() {}
    renderElement() {
        const parent = document.querySelector('header');
        const element = new Element('div', ['inner', 'div__inner']);
        parent.appendChild(element.create());
        // element.appendToElement(parent);
    }
}

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { header } from '../../templates/header';
import { mainElement } from '../../templates/mainElement';

export default class Layout {
    body: HTMLElement | null = null;

    init() {
        this.body = document.querySelector('body') as HTMLElement;
        this.createHeader();
        this.createMain();
        this.createFooter();
    }

    createHeader() {
        (this.body as HTMLElement).insertAdjacentHTML('beforeend', header);
    }

    createMain() {
        (this.body as HTMLElement).insertAdjacentHTML('beforeend', mainElement);
    }

    createFooter() {
        const footer = `<footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__copy">&copy;</div>
                <div class="footer__year">2022</div>
                <a href="https://github.com/SanyaPE" class="footer__github nav__link" target="_blank">sanyape</a>
                <a href="https://rs.school/js/" class="footer__rss" target="_blank"></a>
            </div>
        </div>
    </footer>`;
        (this.body as HTMLElement).insertAdjacentHTML('beforeend', footer);
    }
}

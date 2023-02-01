/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
export default class Layout {
    body: HTMLElement | null = null;
    init() {
        this.body = document.querySelector('body') as HTMLElement;
        this.createHeader();
        this.createMain();
        this.createFooter();
    }
    createHeader() {
        const header = `<header class="header">
        <div class="container header__container">
            <h1 class="header__title">Async Race</h1>
            <nav class="nav">
                <button class="nav__btn active" data-btn="garage">Garage</button>
                <button class="nav__btn" data-btn="winners">Winners</button>
            </nav>
        </div>
        </header>`;
        (this.body as HTMLElement).insertAdjacentHTML('beforeend', header);
    }
    createMain() {
        const main = `<main class="main" id="main"></main>`;
        (this.body as HTMLElement).insertAdjacentHTML('beforeend', main);
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

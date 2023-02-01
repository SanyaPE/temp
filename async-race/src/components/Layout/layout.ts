/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { header } from '../../templates/header';
import { mainElement } from '../../templates/mainElement';
import { footer } from '../../templates/footer';

export default class Layout {
    body: HTMLElement | null = null;

    init() {
        this.body = document.querySelector('body') as HTMLElement;
        this.createHeader();
        this.createMainElement();
        this.createFooter();
    }

    createHeader() {
        (this.body as HTMLElement).insertAdjacentHTML('beforeend', header);
    }

    createMainElement() {
        (this.body as HTMLElement).insertAdjacentHTML('beforeend', mainElement);
    }

    createFooter() {
        (this.body as HTMLElement).insertAdjacentHTML('beforeend', footer);
    }
}

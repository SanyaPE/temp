import { header } from '../templates/header';
import { mainElement } from '../templates/mainElement';
import { footer } from '../templates/footer';
import { GARAGE } from '../templates/viewGarage';
import { WINNERS } from '../templates/viewWinners';

export default class Layout {
    body: HTMLElement = document.body;

    init() {
        this.createHeader();
        this.createMainElement();
        this.createFooter();
    }

    createHeader() {
        this.body.insertAdjacentHTML('beforeend', header);
    }

    createMainElement() {
        this.body.insertAdjacentHTML('beforeend', mainElement);

        const main = this.body.lastElementChild;
        if (main) {
            main.insertAdjacentHTML('beforeend', GARAGE);
            main.insertAdjacentHTML('beforeend', WINNERS);
        }
    }

    createFooter() {
        this.body.insertAdjacentHTML('beforeend', footer);
    }
}

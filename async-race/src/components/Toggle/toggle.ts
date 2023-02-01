import { IElements } from '../../models/models';
import { GARAGE, WINNERS } from '../../templates/pagesElement';

export default class TogglePage {
    elements: IElements = {};

    init() {
        const nav = document.querySelector('.nav');
        this.elements.main = document.querySelector('.main');
        nav?.addEventListener('click', (e: Event) => {
            this.togglePage(e);
        });
        const main = this.elements.main as HTMLElement;
        main.insertAdjacentHTML('beforeend', GARAGE);
        this.elements.garage = main.querySelector('.garage');
    }

    togglePage(e?: Event) {
        const main = this.elements.main as HTMLElement;
        const target = e ? (e.target as HTMLElement) : null;
        const pageName: string = !target ? 'garage' : <string>target.dataset.btn;
        if (!Object.prototype.hasOwnProperty.call(this.elements, pageName)) {
            (main as HTMLElement).innerHTML = '';
            main.insertAdjacentHTML('beforeend', WINNERS);
            this.elements.winners = main.querySelector('.winners');
        } else {
            (main as HTMLElement).innerHTML = '';
            const targetPage = this.elements[pageName] as Node;
            main?.appendChild(targetPage);
        }
    }
}

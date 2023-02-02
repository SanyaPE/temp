import { IElements } from '../../models/models';
import { VIEW_GARAGE } from '../../constants/const';

export default class TogglePage {
    viewPage = VIEW_GARAGE;
    elements: IElements = {};

    init() {
        this.elements.nav = document.getElementById('nav');
        const nav = this.elements.nav;
        if (!nav) {
            return;
        }
        nav.addEventListener('click', (e: Event) => {
            this.togglePage(e);
        });

        this.elements.main = document.getElementById('main');
    }

    togglePage(e: Event) {
        const target = <HTMLElement>e.target;
        const { nav, main } = this.elements;
        if (!target || !nav || !main) {
            return;
        }

        Array.from(nav.children).forEach((navBtn) => {
            if (navBtn === target) {
                navBtn.classList.add('active');
                navBtn.setAttribute('disabled', '');
                return;
            }

            navBtn.classList.remove('active');
            navBtn.removeAttribute('disabled');
        });

        Array.from(main.children).forEach((mainSection) => {
            const viewPage = (mainSection as HTMLElement).dataset.view;
            if (!viewPage) {
                return;
            }

            if (target.dataset.btn == viewPage) {
                mainSection.classList.remove('hidden');
                this.viewPage = viewPage;
                return;
            }

            mainSection.classList.add('hidden');
        });
    }
}

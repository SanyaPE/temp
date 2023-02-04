import { IElements } from '../../models/models';
import { GARAGE_ACTION, VIEWS } from '../../constants/const';
import { checkBtnForAction } from '../Common/checkBtnForAction';

export default class MainViews {
    mainView = VIEWS.garage;
    elements: IElements = {};

    init() {
        this.elements.nav = document.getElementById('nav');
        const nav = this.elements.nav;
        nav?.addEventListener('click', (e: Event) => {
            this.togglePage(e);
        });

        this.elements.main = document.getElementById('main');
        document.body.addEventListener('click', (e: Event) => this.dispatchActionEvent(e));

        this.elements.popUp = document.getElementById('popup');
    }

    dispatchActionEvent(e: Event) {
        const detail = checkBtnForAction(e);
        if (!detail?.action) {
            return;
        }

        document.body.dispatchEvent(
            new CustomEvent(GARAGE_ACTION.action, {
                detail,
            })
        );
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
            const mainView = (mainSection as HTMLElement).dataset.view;
            if (!mainView) {
                return;
            }

            if (target.dataset.btn == mainView) {
                mainSection.classList.remove('hidden');
                this.mainView = mainView;
                return;
            }

            mainSection.classList.add('hidden');
        });
        console.log(this.mainView);
    }
}

import { IElements } from '../../models/models';
import { CUSTOM_EVENTS, SORT_BY, SORT_DIR, VIEWS, WINNERS_ACTION } from '../../constants/const';
import { checkBtnForAction } from '../Common/checkBtnForAction';
import { checkBtnForSort } from '../Common/checkBtnForSort';

export default class MainViews {
    mainView = VIEWS.garage;
    elements: IElements = {};

    init() {
        this.elements.nav = document.getElementById('nav');
        const nav = this.elements.nav;
        nav?.addEventListener('click', (e: Event) => {
            this.togglePage(e);

            if (this.mainView === VIEWS.winners) {
                document.body.dispatchEvent(
                    new CustomEvent(CUSTOM_EVENTS.winners, {
                        detail: {
                            action: WINNERS_ACTION.render,
                        },
                    })
                );
            }
        });

        this.elements.main = document.getElementById('main');
        document.body.addEventListener('click', (e: Event) => this.dispatchActionEvent(e));

        this.elements.popUp = document.getElementById('popup');
        this.elements.sortWins = document.getElementById('sort-wins');
        this.elements.sortTime = document.getElementById('sort-time');
        document.getElementById('sort')?.addEventListener('click', (e: Event) => this.dispatchSortEvent(e));
    }

    dispatchActionEvent(e: Event) {
        const detail = checkBtnForAction(e);
        if (!detail?.action) {
            return;
        }

        document.body.dispatchEvent(
            new CustomEvent(CUSTOM_EVENTS.garage, {
                detail,
            })
        );
    }

    dispatchSortEvent(e: Event) {
        const detail = checkBtnForSort(e);

        this.elements.sortTime?.classList.remove(SORT_DIR.asc, SORT_DIR.desc);
        this.elements.sortWins?.classList.remove(SORT_DIR.asc, SORT_DIR.desc);

        if (detail?.sortBy === SORT_BY.time) {
            this.elements.sortTime?.classList.add(detail?.sortDir);
        } else if (detail?.sortBy === SORT_BY.wins) {
            this.elements.sortWins?.classList.add(detail?.sortDir);
        }

        document.body.dispatchEvent(
            new CustomEvent(CUSTOM_EVENTS.winners, {
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
    }
}

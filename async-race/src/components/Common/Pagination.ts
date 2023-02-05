import { checkBtnForPagination } from './checkBtnForPagination';

export default class Pagination {
    view;
    paginationElement;
    totalCarsElement;
    pageElement;
    totalCars = 0;
    currentPage = 1;

    constructor(view: string) {
        this.view = view;
        this.paginationElement = document.getElementById(`pagination-${this.view}`);
        this.totalCarsElement = document.getElementById(`total-${this.view}`);
        this.pageElement = document.getElementById(`page-${this.view}`);
        this.paginationElement?.addEventListener('click', (e: Event) => this.dispatchPaginationEvent(e));
    }

    paginate(totalCars: number, currentPage: number) {
        if (this.totalCarsElement) {
            this.totalCars = totalCars;
            this.totalCarsElement.textContent = String(totalCars);
        }
        if (this.pageElement) {
            this.currentPage = currentPage;
            this.pageElement.textContent = String(currentPage);
        }
    }

    dispatchPaginationEvent(e: Event) {
        const { update, nextPage } = checkBtnForPagination(e, this.view, this.currentPage, this.totalCars);
        if (!update) {
            return;
        }

        const detail = {
            nextPage,
            view: this.view,
        };

        document.body.dispatchEvent(
            new CustomEvent(`${this.view}-paginate`, {
                detail,
            })
        );
    }
}

export default class Pagination {
    // paginationWrap: document.querySelector('.pagination__wrapper');
    pageCount: number | string;
    pagination: HTMLElement;

    constructor(pageCount: number | string) {
        this.pageCount = pageCount;
        this.pagination = document.createElement('div');
    }

    element() {
        for (let i = 1; i <= this.pageCount; i++) {
            this.pagination.classList.add('pagination');
            const btn = document.createElement('button');
            btn.classList.add('pagination__item', 'btn');
            btn.dataset.btn = 'page';
            btn.textContent = `${i}`;
            this.pagination.appendChild(btn);
        }
        return this.pagination;
    }

    appendTo(parent: Node) {
        parent.appendChild(this.pagination as Node);
    }
}

// checkButton(e: Event) {
//     const target = <HTMLElement>e.target;
//     // const buttons = BUTTONS;
//     const targetBtn = target.dataset.btn;
//     if (!targetBtn) {
//         return;
//     }
//     console.log(targetBtn);

//     // if (!buttons.includes(targetBtn as string)) return;
//     // if (targetBtn == 'page') {
//     // if (target.innerHTML == this.appState.currentGaragePage) return;
//     // const paginationBtns = document.querySelectorAll('.pagination__item');
//     // paginationBtns.forEach((btn) => {
//     //     btn.classList.remove('active');
//     //     if (btn == target) {
//     //         btn.classList.add('active');
//     //         this.appState.currentGaragePage = +btn.innerHTML;
//     //         this.renderCarsOnPage();
//     //     }
//     // });
//     // }

// async createPagination() {
//     const totalQty = document.querySelector('.total__qty') as HTMLElement;
//     const pageCount = document.querySelector('.page__count') as HTMLElement;
//     try {
//         const data = this.apiClient.getCount();
//         const countCars = await data;
//         const countPages = Math.ceil(Number(countCars) / PAGE_VALUE);
//         totalQty.textContent = `${countCars}`;
//         pageCount.textContent = `${countPages}`;
//         const paginationWrap = document.querySelector('.pagination__wrapper');
//         (paginationWrap as HTMLElement).innerHTML = '';
//         const pagination = new Pagination(countPages);
//         pagination.element();
//         pagination.appendTo(paginationWrap as Node);
//         const paginationBtns = pagination.pagination.querySelectorAll('.btn');
//         this.appState.currentGaragePage = +this.appState.currentGaragePage - 1;
//         const pageActive = paginationBtns[this.appState.currentGaragePage];
//         pageActive.classList.toggle('active');
//     } catch (err) {
//         totalQty.innerHTML = 'No connect';
//         pageCount.innerHTML = `No connect`;
//     }
// }

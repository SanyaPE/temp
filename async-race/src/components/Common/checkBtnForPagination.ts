import { PAGE_ACTION, VIEWS, CARS_ON_PAGE, WINNERS_ON_PAGE } from '../../constants/const';

export function checkBtnForPagination(e: Event, view: string, currentPage: number, totalCars: number) {
    const target = <HTMLElement>e.target;
    const action = target.dataset.btn;
    let update = false;
    let nextPage = 1;
    const itemsOnPage = view === VIEWS.garage ? CARS_ON_PAGE : WINNERS_ON_PAGE;
    const totalPages = Math.ceil(totalCars / itemsOnPage);

    if (action === PAGE_ACTION.first) {
        nextPage = 1;
    } else if (action === PAGE_ACTION.prev) {
        nextPage = currentPage - 1;
    } else if (action === PAGE_ACTION.next) {
        nextPage = currentPage + 1;
    } else if (action === PAGE_ACTION.last) {
        nextPage = totalPages;
    }

    if (nextPage !== currentPage && nextPage >= 1 && nextPage <= totalPages) {
        update = true;
    }

    return {
        update,
        nextPage,
    };
}

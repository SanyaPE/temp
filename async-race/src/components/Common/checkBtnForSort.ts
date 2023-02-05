import { SORT_DIR, WINNERS_ACTION } from '../../constants/const';

export function checkBtnForSort(e: Event) {
    const target = <HTMLElement>e.target;
    const sortBy = target.dataset.sort;
    let sortDir = SORT_DIR.desc;
    if (!sortBy) {
        return;
    }

    if (target.classList.contains(SORT_DIR.asc)) {
        sortDir = SORT_DIR.desc;
    } else if (target.classList.contains(SORT_DIR.desc)) {
        sortDir = SORT_DIR.asc;
    }

    return {
        action: WINNERS_ACTION.sort,
        sortBy,
        sortDir,
    };
}

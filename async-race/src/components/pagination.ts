export default class Pagination {
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
            btn.innerHTML = `${i}`;
            this.pagination.appendChild(btn);
        }
        return this.pagination;
    }
    appendTo(parent: Node) {
        parent.appendChild(this.pagination as Node);
    }
}

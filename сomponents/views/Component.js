export class Component {
    constructor(data) {
        this.selector = data.selector;
        this.templateUrl = data.templateUrl;
        this.parent = data.parent;
    }
    init() {
        return this.getTemplate();
    }
    async getTemplate() {
        const htmlText = await fetch(this.templateUrl).then((response) =>
            response.text()
        );
        return this.appendTo(htmlText);
    }
    async appendTo(htmlText) {
        const parent = document.querySelector(this.parent);
        parent.insertAdjacentHTML('beforeend', htmlText);
        const html = parent.querySelector(`.${this.selector}`);
        return html;
    }
}

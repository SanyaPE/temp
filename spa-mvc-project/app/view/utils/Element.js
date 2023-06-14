export class Element {
    /**
     *
     * @param {string} element
     * @param {array} classNames
     * @param {...array} attributes
     */
    constructor(element, classNames, attributes) {
        this.element = document.createElement(element);
        this.classNames = classNames;
        this.attributes = attributes;
    }
    create() {
        this.addClassName();
        return this.element;
    }
    addClassName() {
        console.log(...this.classNames);
        this.element.classList.add(...this.classNames);
    }
    addAtributes() {}
    appendTo(parent) {
        parent.appendChild(this.element);
    }
}

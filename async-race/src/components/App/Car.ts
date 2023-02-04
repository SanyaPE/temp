import { CAR_ELEM } from '../../templates/carElement';
import { ICar } from '../../models/models';

export default class Car {
    data: ICar;
    elem = document.createElement('div');

    constructor(data: ICar) {
        this.data = data;
        this.createElement();
    }

    createElement() {
        this.elem.insertAdjacentHTML('beforeend', CAR_ELEM);
        const name = <HTMLElement>this.elem.querySelector('.car__name');
        const img = <HTMLElement>this.elem.querySelector('#color');
        const car = <HTMLElement>this.elem.querySelector('.car');
        car.setAttribute('id', String(this.data.id));
        img.setAttribute('fill', this.data.color);
        name.textContent = this.data.name;
    }

    appendTo(parent: Node) {
        parent.appendChild(this.elem as Node);
    }
}

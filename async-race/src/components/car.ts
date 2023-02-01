/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CAR_ELEM } from './carElement';
import { ICar } from './models';
export default class Car {
    data: ICar;
    elem: HTMLElement;
    constructor(data: ICar) {
        this.data = data;
        this.elem = document.createElement('div');
    }
    element() {
        this.elem.insertAdjacentHTML('beforeend', CAR_ELEM);
        const name = this.elem.querySelector('.car__name') as HTMLElement;
        const img = this.elem.querySelector('#color') as HTMLElement;
        const car = this.elem.querySelector('.car') as HTMLElement;
        car.setAttribute('id', this.data.id);
        name.innerHTML = this.data.name;
        img.setAttribute('fill', this.data.color);
    }
    appendTo(parent: Node) {
        parent.appendChild(this.elem as Node);
    }
}

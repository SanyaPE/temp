import { IWinner } from '../../models/models';
import { WINNER_ELEM } from '../../templates/winnerElement';

export default class Winner {
    data: IWinner;
    elem = document.createElement('tr');

    constructor(data: IWinner) {
        // #, CarColor, CarName, Wins, BestTime(sec)
        console.log(data);
        this.data = data;
        this.createElement();
    }

    createElement() {
        this.elem.insertAdjacentHTML('beforeend', WINNER_ELEM);
        // const id = <HTMLElement>this.elem.querySelector('.car__id');
        // id.textContent = String(this.data.id);
        const img = <HTMLElement>this.elem.querySelector('#color');
        img.setAttribute('fill', this.data.color);
        const name = <HTMLElement>this.elem.querySelector('.car__name');
        name.textContent = this.data.name;
        const wins = <HTMLElement>this.elem.querySelector('.car__wins');
        wins.textContent = String(this.data.wins);
        const time = <HTMLElement>this.elem.querySelector('.car__time');
        time.textContent = String(this.data.time);
    }

    appendTo(parent: Node) {
        parent.appendChild(<Node>this.elem);
    }
}

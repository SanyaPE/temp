import { KeyboardView } from '../view/keyboard.view.js';

export class KeyboardController {
    constructor() {
        this.init();
        this.view = new KeyboardView(this);
    }
    init() {
        console.log('start KeyboardController');
    }
}

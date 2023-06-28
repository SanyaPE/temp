 import { KeyboardView } from '../view/keyboard.view.js'

export class KeyboardController {
    constructor() {
        this.init();
        this.view = new KeyboardView()
    }
    init() {
        console.log('start KeyboardController');
    }
}

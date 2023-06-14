import { Models } from '../models/Models.js';
import { View } from '../view/view.js';

export class Controller {
    static #count = 0;
    constructor() {
        Controller.#count++;
        if (Controller.#count > 1) throw new Error('Объект уже создан');
    }
    init() {
        console.log('start controller');
        Controller.models = new Models();
        Controller.view = new View(Controller.models.settings);
        Controller.models.init();
        Controller.view.init();
        // view.renderElement();
    }
    static setLang(lang) {
        Controller.models.setLang(lang);
    }
}

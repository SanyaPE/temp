import { Models } from '../models/Models.js';
import { View } from '../view/view.js';
import { GalleryController } from './gallery.controller.js';
import { KeyboardController } from './keyboard.controller.js';

export class Controller {
    static models;
    static view;
    constructor() {}
    init() {
        console.log('start main controller');
        Controller.models = new Models();
        Controller.view = new View();
        Controller.models.init();
        Controller.view.init();
        // this.selectPage()
        // this.initController(Controller.models.settings.page);
        // view.renderElement();
    }
    selectController(page) {
        if (page === 'keyboard') Controller.page = new KeyboardController().init();
        if (page === 'gallery') Controller.page = new GalleryController().init();
    }
    getSettings(){

    }
    static setPage(page) {
        Controller.models.setPage(page);
    }
    static setLang(lang) {
        Controller.models.setLang(lang);
    }
}

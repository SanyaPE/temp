import { Models } from '../models/Models.js';
import { View } from '../view/view.js';
import { GalleryController } from './gallery.controller.js';
import { KeyboardController } from './keyboard.controller.js';
import { AboutController } from './about.controller.js';

export class Controller {
    #models = null;
    #view = null;
    constructor() {
        this.init();
    }
    init() {
        console.log('start main controller');
        // Controller.models = new Models();
        // Controller.view = new View(this);
        this.#models = new Models();
        this.#view = new View(this);
        // this.presetting(Controller.models.settings);
        // this.renderPage(Controller.models.settings);

        // this.selectPage()
        // this.initController(Controller.models.settings.page);
        // view.renderElement();
    }
    createPageController() {
        console.log('createPageController');
        console.log(this.models.getSettings());
    }
    selectController(page) {}
    getSettings() {
        return this.#models.getSettings();
        
    }
    presetting(settings) {
        Controller.view.presetting(settings);
    }
    renderPage(settings) {
        const { page, lang } = settings;
        if (page === 'keyboard') Controller.page = new KeyboardController().init();
        if (page === 'gallery') Controller.page = new GalleryController().init();
        if (page === 'about') Controller.page = new AboutController().init();
        Controller.view.renderPage(page);
    }
    static setPage(page) {
        Controller.models.setPage(page);
    }
    static setLang(lang) {
        Controller.models.setLang(lang);
    }
}

import { Models } from '../models/Models.js';
import { View } from '../view/view.js';
import { GalleryController } from './gallery.controller.js';
import { KeyboardController } from './keyboard.controller.js';
import { AboutController } from './about.controller.js';

export class Controller {
    currentPage = null;
    constructor() {
        this.models = new Models();
        this.view = new View(this);
        this.init();
    }
    init() {
        console.log('start main controller');
        this.selectPageController();
    }
    selectPageController() {
        const { page, lang } = this.getSettings();
        if (page === 'about') this.currentPage = new AboutController();
        if (page === 'keyboard') this.currentPage = new KeyboardController();
        if (page === 'gallery') this.currentPage = new GalleryController();
    }
    getSettings() {
        return this.models.getSettings();
    }
    presetting(settings) {
        Controller.view.presetting(settings);
    }
    setPage(page) {
        this.models.setPage(page);
    }
    setLang(lang) {
        this.models.setLang(lang);
    }
}

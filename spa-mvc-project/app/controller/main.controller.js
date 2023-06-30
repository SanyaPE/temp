import { Models } from '../models/Models.js';
import { MainView } from '../view/main.view.js';
import { GalleryController } from './gallery.controller.js';
import { KeyboardController } from './keyboard.controller.js';
import { AboutController } from './about.controller.js';
import { Controller } from './controller.js';

export class MainController extends Controller {
    currentPage = null;
    constructor(models) {
        super(models);
        this.view = new MainView(this);
        this.init();
    }
    init() {
        this.selectPageController();
    }
    selectPageController() {
        const { page, lang } = this.getSettings();
        if (page === 'about') this.currentPage = new AboutController();
        if (page === 'keyboard') this.currentPage = new KeyboardController();
        if (page === 'gallery') this.currentPage = new GalleryController();
    }
}

import { MainController } from './controller/main.controller.js';

export class App {
    constructor() {
        this.init();
    }
    init() {
        new MainController();
    }
}

import { Controller } from './controller/controller.js';

export class App {
    constructor() {
        this.init();
    }
    init() {
        new Controller();
    }
}

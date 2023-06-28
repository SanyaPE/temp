
import { AboutView } from "../view/about.view.js";

export class AboutController {
    constructor() {
        this.init();
        this.view  = new AboutView()
    }
    init() {
        console.log('AboutController');
    }
}

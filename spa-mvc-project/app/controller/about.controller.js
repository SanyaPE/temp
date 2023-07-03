import { AboutView } from '../view/about.view.js';
import { Controller } from './controller.js';

export class AboutController extends Controller {
    constructor(models) {
        super(models)
        this.view = new AboutView(this);
        this.init();
    }
    init() {
        console.log('AboutController');
    }
}

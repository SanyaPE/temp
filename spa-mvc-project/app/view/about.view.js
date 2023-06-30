import { ABOUT__PAGE } from './components/about.page.js';
import { View } from './view.js';

export class AboutView extends View {
    constructor(controller) {
        super(controller)
        this.parent = document.querySelector('#main');
        this.init();
    }
    init() {
        // const main = document.querySelector('#main');
        const element = this.getModels(ABOUT__PAGE)
        this.parent.innerHTML = ABOUT__PAGE;
    }
    controlButton() {
        const about = document.querySelector('.about');
        about.addEventListener('click', (e) => {
            console.log(e.target);
        });
    }
}

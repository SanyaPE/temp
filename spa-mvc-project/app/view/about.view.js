import { ABOUT__PAGE } from './components/about.page.js';
import { View } from './view.js';

export class AboutView extends View {
    constructor(controller) {
        super(controller)
        this.parent = document.querySelector('#main');
        this.init();
    }
    init() {
        this.renderPage()
        
    }
    renderPage(){
        const { lang, page } = this.controller.getSettings();
        const element = this.getModels(ABOUT__PAGE)
        this.parent.append(this.translate(element, lang));
        this.setActiveBtn(page)
    }
    
    controlButton() {
        const about = document.querySelector('.about');
        about.addEventListener('click', (e) => {
            console.log(e.target);
        });
    }
}

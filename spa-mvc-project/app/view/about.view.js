import { ABOUT__PAGE } from "./components/about.page.js";

export class AboutView {
    constructor() {
        this.init();
    }
    init() {
        const main = document.querySelector('#main')
        main.innerHTML = ABOUT__PAGE
    }
    controlButton(){
        const about = document.querySelector('.about')
        about.addEventListener('click', (e)=>{
            console.log(e.target);
        })
    }
    
}

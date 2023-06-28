import { KEYBOARD__PAGE } from "./components/keyboard.page.js";


export class KeyboardView {
    constructor() {
        this.init();
    }
    init() {
        const main = document.querySelector('#main')
        main.innerHTML = KEYBOARD__PAGE
    }
    controlButton(){
        const section = document.querySelector('.gallery')
        section.addEventListener('click', (e)=>{
            console.log(e.target);
        })
    }
    
}

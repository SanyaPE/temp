import { GALLERY__PAGE } from "./components/gallery.page.js";


export class GalleryView {
    constructor() {
        this.init();
    }
    init() {
        const main = document.querySelector('#main')
        main.innerHTML = GALLERY__PAGE
    }
    controlButton(){
        const section = document.querySelector('.gallery')
        section.addEventListener('click', (e)=>{
            console.log(e.target);
        })
    }
    
}

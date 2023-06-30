import { GalleryView } from "../view/gallery.view.js";
export class GalleryController{
    constructor(){
        this.init()
        this.view = new GalleryView(this)
    }
    init(){
        console.log('GalleryController');
        
    }
}
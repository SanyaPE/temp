import { Models } from "../models/Models.js";


export class Controller {
    constructor(){
        this.models = new Models()
    }
    getSettings() {
        return this.models.getSettings();
    }
    setPage(page) {
        this.models.setPage(page);
    }
    setLang(lang) {
        this.models.setLang(lang);
    }
}

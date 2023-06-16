import keysEn from './keysEn.js';
import keysRu from './keysRu.js';

export class Models {
    constructor() {
        if (this.getSettings()) this.settings = JSON.parse(this.getSettings());
        else
            this.settings = {
                lang: 'en',
                page: 'keyboard',
            };
    }
    init() {
        console.log('start models ');
    }
    setLang(lang) {
        this.settings.lang = lang;
        localStorage.setItem('settings', JSON.stringify(this.settings));
    }
    setPage(page) {
        this.settings.page = page;
        localStorage.setItem('settings', JSON.stringify(this.settings));
    }
    getSettings() {
        return localStorage.getItem('settings');
    }
}

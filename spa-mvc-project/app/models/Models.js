import keysEn from './keysEn.js';
import keysRu from './keysRu.js';
const SETTINGS_DEFAULT = {
    lang: 'en',
    page: 'about',
};

export class Models {
    settings = null;
    constructor() {
        this.init();
    }
    init() {
        console.log('start models ');
        this.settings = !this.getLocalStorage() ? SETTINGS_DEFAULT : this.getLocalStorage();
    }
    setLang(lang) {
        console.log('lang-3', lang);
        this.settings.lang = lang;
        console.log(this.settings);
    }
    setPage(page) {
        console.log('page-3', page);
        this.settings.page = page;
        console.log(this.settings);
    }
    setLocalStorage() {
        window.addEventListener('beforeunload', () => localStorage.setItem('settings', this.settings));
    }
    getLocalStorage() {
        return JSON.parse(localStorage.getItem('settings'));
    }
    getSettings() {
        return this.settings;
    }
}

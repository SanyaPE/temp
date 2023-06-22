import keysEn from './keysEn.js';
import keysRu from './keysRu.js';
const SETTINGS_DEFAULT = {
    lang: 'ru',
    page: 'keyboard',
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
        this.settings.lang = lang;
    }
    setPage(page) {
        this.settings.page = page;
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

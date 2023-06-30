import keysEn from './keysEn.js';
import keysRu from './keysRu.js';
const SETTINGS_DEFAULT = {
    lang: 'ru',
    page: 'about',
};

export class Models {
    settings = null;
    constructor() {
        this.init();
    }
    init() {
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

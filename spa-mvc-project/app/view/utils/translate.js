import { i18nObj } from "../../models/language.js";

export default function translate(element, lang) {
    const dataList = element.querySelectorAll('[data-i18n]');
    dataList.forEach((item) => {
        item.textContent = i18nObj[lang][item.dataset.i18n];
    });
    return element
}
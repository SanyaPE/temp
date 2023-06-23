export class AboutController {
    constructor() {
        this.init();
    }
    init() {
        console.log('AboutController');
        this.buttonControl();
    }
    buttonControl() {
        console.log('buttonControl');
        const about = document.querySelector('.about');
        const btns = about.querySelectorAll('button');
        about.addEventListener('click', (e) => {
            console.log(e.target);
        });
    }
}

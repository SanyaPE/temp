import TogglePage from './toggle';
import Client from './client';
import Car from './car';
import { ICar, IControlInput } from './models';
import ControlInput from './input';
import { BUTTONS, PAGE_VALUE, CAR_GENERATE_COUNT, CAR_BRANDS } from './const';
import Pagination from './pagination';
import Animation from './animation';

class App {
    [x: string]: any;
    main: Node | HTMLElement | null;
    client: any | null = null;
    constructor() {
        this.main = null;
    }
    countPageActive: string | number = 1;
    cars: any[] = [];
    controlInput: IControlInput | null = null;
    targetId: number | string | null | undefined = null;
    targetName: string | null | undefined = null;
    init() {
        const toglePage = new TogglePage();
        toglePage.init();
        this.main = toglePage.elements.main;
        this.main?.addEventListener('click', this.checkButton.bind(this));
        this.client = new Client();
        this.createPagination();
        this.createCarsOnPage();
        this.controlInput = new ControlInput() as IControlInput;
        this.controlInput.watchInput();
    }
    async createPagination() {
        const totalQty = document.querySelector('.total__qty') as HTMLElement;
        const pageCount = document.querySelector('.page__count') as HTMLElement;
        try {
            const data = this.client.getCount();
            const countCars = await data;
            const countPages = Math.ceil(Number(countCars) / PAGE_VALUE);
            totalQty.innerHTML = countCars;
            pageCount.innerHTML = `${countPages}`;
            const paginationWrap = document.querySelector('.pagination__wrapper');
            (paginationWrap as HTMLElement).innerHTML = '';
            const pagination = new Pagination(countPages);
            pagination.element();
            pagination.appendTo(paginationWrap as Node);
            const paginationBtns = pagination.pagination.querySelectorAll('.btn');
            const countPageActive = +this.countPageActive - 1;
            const pageActive = paginationBtns[countPageActive];
            pageActive.classList.toggle('active');
        } catch (err) {
            console.log(err);
            totalQty.innerHTML = 'No connect';
            pageCount.innerHTML = `No connect`;
        }
    }
    async createCarsOnPage() {
        const countPages = this.countPageActive;
        const race = (this.main as HTMLElement).querySelector('.race');
        try {
            const data = this.client.getCars(countPages);
            (race as HTMLElement).innerHTML = '';
            const dataCars = await data;
            Object.values(dataCars).forEach((data) => {
                const car = new Car(data as ICar);
                car.element();
                car.appendTo(race as Node);
            });
        } catch (err) {
            (race as HTMLElement).innerHTML = 'No connect';
        }
    }
    checkButton(e: Event) {
        const target = e.target as HTMLElement;
        const buttons = BUTTONS;
        const targetBtn = (target as HTMLElement).dataset.btn;
        if (!buttons.includes(targetBtn as string)) return;
        if (targetBtn == 'page') {
            if (target.innerHTML == this.countPageActive) return;
            const paginationBtns = document.querySelectorAll('.pagination__item');
            paginationBtns.forEach((btn) => {
                btn.classList.remove('active');
                if (btn == target) {
                    btn.classList.add('active');
                    this.countPageActive = +btn.innerHTML;
                    this.createCarsOnPage();
                }
            });
        }
        if (targetBtn == 'generate') {
            const count = CAR_GENERATE_COUNT;
            for (let i = 0; i < count; i++) {
                this.createCar();
            }
            this.createPagination();
            this.createCarsOnPage();
        }
        if (targetBtn == 'create') {
            const param = this.controlInput;
            this.createCar(param?.name, param?.color);
            this.createPagination();
            this.createCarsOnPage();
        }
        if (targetBtn == 'select') {
            const targetCar = target.closest('.car');
            const id = targetCar?.getAttribute('id');
            const name = targetCar?.querySelector('.car__name')?.innerHTML;
            this.targetId = id;
            this.targetName = name;
            const updateBtn = document.querySelector('.btn-update') as HTMLInputElement;
            updateBtn.disabled = false;
        }
        if (targetBtn == 'update') {
            const param = this.controlInput;
            const name = param?.name ? param.name : this.targetName;
            const color = param?.color ? param.color : this.randomColor();
            const id = this.targetId as string;
            this.updateCar(name as string, color, id);
            this.createPagination();
            this.createCarsOnPage();
        }
        if (targetBtn == 'remove') {
            this.targetId = target.closest('.car')?.getAttribute('id');
            this.deleteCar();
            this.createPagination();
            this.createCarsOnPage();
        }
        if (targetBtn == 'start') {
            this.targetId = target.closest('.car')?.getAttribute('id');
            this.startCar();
        }
    }
    async createCar(name?: string, color?: string) {
        name = name ? name : this.randomName();
        color = color ? color : this.randomColor();
        const param = { name: name, color: color };
        this.client.createCar(param);
    }
    async updateCar(name: string, color: string, id: string) {
        this.client.updateCar(name, color, id);
    }
    async deleteCar() {
        this.client.deleteCar(this.targetId);
    }
    async startCar() {
        const res = this.client.startEngine(this.targetId);
        const data = await res;
        const { velocity, distance } = data;
        const duration = distance / velocity;
        Animation(this.targetId as number, duration as number);
    }
    randomName() {
        const rand = Math.floor(Math.random() * CAR_BRANDS.length);
        return CAR_BRANDS[rand];
    }
    randomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor}`;
    }
}
export default App;

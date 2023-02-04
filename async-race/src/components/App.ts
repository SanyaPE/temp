import ViewPages from './App/MainViews';
import ApiClient from '../api/apiClient';
import Car from './App/Car';
import { IAppState, ICar } from '../models/models';
import ControlInput from './App/ControlInput';
import { CAR_BRANDS } from '../constants/carBrands';
import { ACTION, CAR_GENERATE_COUNT } from '../constants/const';
import { CAR_MODELS } from '../constants/carModels';
import { randomColor } from '../utils/randColor';
import { randomName } from '../utils/randName';

class App {
    apiClient = new ApiClient();
    viewPages = new ViewPages();
    controlInput = new ControlInput();
    appState: IAppState = {
        currentGaragePage: 1,
        currentWinnersPage: 1,
        selectedCar: {
            id: 0,
            name: '',
            color: '',
        },
        totalCars: 0,
        totalWinners: 0,
        carsToRace: [],
    };

    init() {
        this.viewPages.init();
        const { main } = this.viewPages.elements;
        main?.addEventListener(ACTION.action, (e) => this.actionOnCars(<CustomEvent>e));
        this.controlInput.watchInput();

        this.renderCarsOnPage();
    }

    async renderCarsOnPage() {
        const { currentGaragePage } = this.appState;
        const { main } = this.viewPages.elements;
        const raceElement = <HTMLElement>main?.querySelector('#race');
        this.viewPages.elements.race = raceElement;

        try {
            raceElement.replaceChildren();

            this.appState.carsToRace = <Array<ICar>>await this.apiClient.getCars(currentGaragePage);

            Object.values(this.appState.carsToRace).forEach((carData) => {
                new Car(<ICar>carData).appendTo(raceElement);
            });

            this.appState.totalCars = Number(await this.apiClient.getCount()) || 0;
            // rerender GARAGE pagination
        } catch (err) {
            raceElement.textContent = 'NO CONNECTION TO API';
        }
    }

    async actionOnCars(e: CustomEvent) {
        const carId = Number(e?.detail?.carId);
        const action = e?.detail?.action;
        if (carId) {
            this.appState.selectedCar.id = carId;
        }
        if (!action) {
            return;
        }

        switch (action) {
            case ACTION.start:
                this.startCar(carId);
                break;
            case ACTION.stop:
                this.stopCar(carId);
                break;
            case ACTION.race:
                this.raceCars();
                break;
            case ACTION.reset:
                this.resetCars();
                break;
            case ACTION.generate:
                this.generateCars();
                break;
            case ACTION.create:
                await this.createCar(ACTION.create);
                this.renderCarsOnPage();
                break;
            case ACTION.select:
                this.selectCar(carId);
                break;
            case ACTION.update:
                this.updateCar();
                break;
            case ACTION.remove:
                this.deleteCar(carId);
                break;
        }
    }

    async startCar(carId: number) {
        const carStartData = await this.apiClient.startEngine(carId);
        const { velocity, distance } = carStartData;
        const duration = distance / velocity;

        const carElement = <HTMLElement>document.getElementById(String(carId));
        const carElementImg = carElement.querySelector('.car__img');
        if (!carElementImg) {
            return;
        }
        carElement?.querySelector('.car__stop-btn')?.removeAttribute('disabled');
        const carAnimation = carElementImg.animate(
            [
                { transform: 'translateX(0)' },
                { transform: `translateX(${carElement?.offsetWidth - 1.7 * carElementImg.clientWidth}px)` },
            ],
            {
                id: String(carId),
                duration,
                easing: 'linear',
                fill: 'forwards',
            }
        );

        const carIndex = this.appState.carsToRace.findIndex((car) => car.id === carId);
        if (carIndex !== -1) {
            this.appState.carsToRace[carIndex].animation = carAnimation;
        }

        try {
            await this.apiClient.driveEngine(carId);
        } catch (error) {
            carAnimation.pause();
        }
    }

    async stopCar(carId: number) {
        await this.apiClient.stopEngine(carId);
        const car = this.appState.carsToRace.find((car) => car.id === carId);
        car?.animation?.cancel();
        this.enableBtn(String(carId), ACTION.start);
        this.disableBtn(String(carId), ACTION.stop);
    }

    async raceCars() {
        const { popUp } = this.viewPages.elements;
        Promise.race(
            this.appState.carsToRace.map(async (car) => {
                this.disableBtn(String(car.id), ACTION.start);
                await this.startCar(car.id);
                return car.animation?.finished;
            })
        ).then((animationFinished) => {
            const carId = animationFinished?.id;
            const car = this.appState.carsToRace.find((car) => car.id === Number(carId));
            if (!popUp || !car) {
                return;
            }
            popUp.classList.add('show');
            const winnerTime = (animationFinished?.currentTime || 0) / 1000;
            popUp.textContent = `Winner is ${car.name} with time ${winnerTime.toFixed(2)}s!`;
            // rerender WINNERS page + pagination
            setTimeout(() => popUp.classList.remove('show'), 2000);
        });
    }

    async resetCars() {
        Promise.all(
            this.appState.carsToRace.map(async (car) => {
                this.enableBtn(String(car.id), ACTION.start);
                await this.stopCar(car.id);
            })
        ).then(() => document.querySelector('.btn-race')?.removeAttribute('disabled'));
    }

    generateCars() {
        const { popUp } = this.viewPages.elements;
        if (popUp) {
            popUp.classList.add('show');
            popUp.textContent = 'Generating Cars... Please Wait...';
        }

        Promise.all(Array.from({ length: CAR_GENERATE_COUNT }, () => this.createCar(ACTION.generate))).then(
            async () => {
                await this.renderCarsOnPage();
                popUp?.classList.remove('show');
            }
        );
    }

    async createCar(action: string) {
        if (action === ACTION.create) {
            const { color, name } = this.controlInput;
            await this.apiClient.createCar({ name, color });
        } else if (action === ACTION.generate) {
            await this.apiClient.createCar({ name: randomName(CAR_BRANDS, CAR_MODELS), color: randomColor() });
        }
    }

    selectCar(carId: number) {
        const { color, name } = <ICar>this.appState.carsToRace.find((car) => car.id === carId);
        this.appState.selectedCar = {
            id: carId,
            name,
            color,
        };
        const { updateName, updateColor, updateBtn } = this.controlInput.controls;
        updateName.value = name;
        updateColor.value = color;
        updateBtn.disabled = false;
    }

    async updateCar() {
        this.appState.selectedCar.name = this.controlInput.name;
        this.appState.selectedCar.color = this.controlInput.color;
        await this.apiClient.updateCar(this.appState.selectedCar);
        this.renderCarsOnPage();
    }

    async deleteCar(id: number) {
        await this.apiClient.deleteCar(id);
        this.renderCarsOnPage();
    }

    enableBtn(id: string, action: string) {
        const carElement = <HTMLElement>document.getElementById(id);
        carElement?.querySelector(`.car__${action}-btn`)?.removeAttribute('disabled');
    }

    disableBtn(id: string, action: string) {
        const carElement = <HTMLElement>document.getElementById(id);
        carElement?.querySelector(`.car__${action}-btn`)?.setAttribute('disabled', '');
    }
}

export default App;

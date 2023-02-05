import ApiGarage from '../../api/apiGarage';
import ApiWinners from '../../api/apiWinners';
import { CAR_BRANDS } from '../../constants/carBrands';
import { CAR_MODELS } from '../../constants/carModels';
import { GARAGE_ACTION, CAR_GENERATE_COUNT, VIEWS } from '../../constants/const';
import { IAppState, ICar, IControlInput, IMainView } from '../../models/models';
import { randomColor } from '../../utils/randColor';
import { randomName } from '../../utils/randName';
import Pagination from '../Common/Pagination';
import Car from './Car';

export class Garage {
    viewPages;
    controlInput;
    appState;
    pagination = new Pagination(VIEWS.garage);
    apiGarage = ApiGarage;
    apiWinners = ApiWinners;

    constructor(appState: IAppState, viewPages: IMainView, controlInput: IControlInput) {
        this.viewPages = viewPages;
        this.controlInput = controlInput;
        this.appState = appState;
    }

    async renderCarsOnPage() {
        const { currentGaragePage } = this.appState;
        const { main } = this.viewPages.elements;
        const raceElement = <HTMLElement>main?.querySelector('#race');
        this.viewPages.elements.race = raceElement;

        try {
            this.appState.carsToRace = <Array<ICar>>await this.apiGarage.getCars(currentGaragePage);
            raceElement.replaceChildren();

            Object.values(this.appState.carsToRace).forEach((carData) => {
                new Car(<ICar>carData).appendTo(raceElement);
            });

            this.appState.totalCars = Number(await this.apiGarage.getCount()) || 0;
            const { totalCars } = this.appState;
            this.pagination.paginate(totalCars, currentGaragePage);
        } catch (err) {
            raceElement.textContent = 'NO CONNECTION TO API';
        }
    }

    async startCar(carId: number) {
        const carStartData = await this.apiGarage.startEngine(carId);
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

        const carIndex = this.appState.carsToRace.findIndex((car: ICar) => car.id === carId);
        if (carIndex !== -1) {
            this.appState.carsToRace[carIndex].animation = carAnimation;
        }

        try {
            await this.apiGarage.driveEngine(carId);
        } catch (error) {
            carAnimation.pause();
        }
    }

    async stopCar(carId: number) {
        await this.apiGarage.stopEngine(carId);
        const car = this.appState.carsToRace.find((car: ICar) => car.id === carId);
        car?.animation?.cancel();
        this.enableBtn(String(carId), GARAGE_ACTION.start);
        this.disableBtn(String(carId), GARAGE_ACTION.stop);
    }

    async raceCars() {
        const { popUp } = this.viewPages.elements;
        const btnReset = document.querySelector('.btn-reset');
        btnReset?.setAttribute('disabled', '');

        Promise.race(
            this.appState.carsToRace.map(async (car: ICar) => {
                this.disableBtn(String(car.id), GARAGE_ACTION.start);
                await this.startCar(car.id);
                return car.animation?.finished;
            })
        ).then(async (animationFinished) => {
            const carId = Number(animationFinished?.id);
            if (!carId) {
                return;
            }

            const car = this.appState.carsToRace.find((car: ICar) => car.id === carId);
            if (!popUp || !car) {
                return;
            }
            popUp.classList.add('show');
            const winnerTime = Number(((animationFinished?.currentTime || 0) / 1000).toFixed(1));
            popUp.textContent = `Winner is ${car.name} with time ${winnerTime}s!`;
            btnReset?.removeAttribute('disabled');
            setTimeout(() => popUp.classList.remove('show'), 2000);

            try {
                const winner = await this.apiWinners.getWinner(carId);
                if (Object.keys(winner).length === 0) {
                    throw new Error('THERE IS NOT SUCH WINNER IN DB. PLEASE CREATE IT...');
                }
                this.apiWinners.updateWinner({
                    id: carId,
                    wins: winner.wins + 1,
                    time: winner.time > winnerTime ? winnerTime : winner.timer,
                });
            } catch (err) {
                console.log('create winner');
                this.apiWinners.createWinner({
                    id: carId,
                    wins: 1,
                    time: winnerTime,
                });
            }
        });
    }

    async resetCars() {
        Promise.all(
            this.appState.carsToRace.map(async (car: ICar) => {
                this.enableBtn(String(car.id), GARAGE_ACTION.start);
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

        Promise.all(Array.from({ length: CAR_GENERATE_COUNT }, () => this.createCar(GARAGE_ACTION.generate))).then(
            async () => {
                await this.renderCarsOnPage();
                popUp?.classList.remove('show');
            }
        );
    }

    async createCar(action: string) {
        if (action === GARAGE_ACTION.create) {
            const { color, name } = this.controlInput;
            await this.apiGarage.createCar({ name, color });
        } else if (action === GARAGE_ACTION.generate) {
            await this.apiGarage.createCar({ name: randomName(CAR_BRANDS, CAR_MODELS), color: randomColor() });
        }
    }

    selectCar(carId: number) {
        const { color, name } = <ICar>this.appState.carsToRace.find((car: ICar) => car.id === carId);
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
        await this.apiGarage.updateCar(this.appState.selectedCar);
        this.renderCarsOnPage();
    }

    async deleteCar(id: number) {
        await this.apiGarage.deleteCar(id);
        this.apiWinners.deleteWinner(id);
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

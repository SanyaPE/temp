import ViewPages from './App/MainViews';
import { IAppState } from '../models/models';
import ControlInput from './App/ControlInput';
import { ACTION } from '../constants/const';
import { Garage } from './App/Garage';

class App {
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
    viewPages = new ViewPages();
    controlInput = new ControlInput();
    garageView = new Garage(this.appState, this.viewPages, this.controlInput);

    init() {
        this.viewPages.init();
        const { main } = this.viewPages.elements;
        main?.addEventListener(ACTION.action, (e) => this.actionOnCars(<CustomEvent>e));
        this.controlInput.watchInput();

        this.garageView.renderCarsOnPage();
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
                this.garageView.startCar(carId);
                break;
            case ACTION.stop:
                this.garageView.stopCar(carId);
                break;
            case ACTION.race:
                this.garageView.raceCars();
                break;
            case ACTION.reset:
                this.garageView.resetCars();
                break;
            case ACTION.generate:
                this.garageView.generateCars();
                break;
            case ACTION.create:
                await this.garageView.createCar(ACTION.create);
                this.garageView.renderCarsOnPage();
                break;
            case ACTION.select:
                this.garageView.selectCar(carId);
                break;
            case ACTION.update:
                this.garageView.updateCar();
                break;
            case ACTION.remove:
                this.garageView.deleteCar(carId);
                break;
        }
    }
}

export default App;

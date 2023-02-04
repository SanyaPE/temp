import ViewPages from './App/MainViews';
import { IAppState } from '../models/models';
import ControlInput from './App/ControlInput';
import { GARAGE_ACTION, PAGE_ACTION } from '../constants/const';
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

    init() {
        this.viewPages.init();
        const garageView = new Garage(this.appState, this.viewPages, this.controlInput);
        garageView.renderCarsOnPage();

        document.body.addEventListener(GARAGE_ACTION.action, (e) => this.actionOnCars(<CustomEvent>e, garageView));
        document.body.addEventListener(PAGE_ACTION.garagePaginate, (e) =>
            this.actionOnGaragePages(<CustomEvent>e, garageView)
        );

        this.controlInput.watchInput();
    }

    async actionOnCars(e: CustomEvent, garageView: Garage) {
        const carId = Number(e?.detail?.carId);
        const action = e?.detail?.action;
        if (carId) {
            this.appState.selectedCar.id = carId;
        }
        if (!action) {
            return;
        }

        switch (action) {
            case GARAGE_ACTION.start:
                garageView.startCar(carId);
                break;
            case GARAGE_ACTION.stop:
                garageView.stopCar(carId);
                break;
            case GARAGE_ACTION.race:
                garageView.raceCars();
                break;
            case GARAGE_ACTION.reset:
                garageView.resetCars();
                break;
            case GARAGE_ACTION.generate:
                garageView.generateCars();
                break;
            case GARAGE_ACTION.create:
                await garageView.createCar(GARAGE_ACTION.create);
                garageView.renderCarsOnPage();
                break;
            case GARAGE_ACTION.select:
                garageView.selectCar(carId);
                break;
            case GARAGE_ACTION.update:
                garageView.updateCar();
                break;
            case GARAGE_ACTION.remove:
                garageView.deleteCar(carId);
                break;
        }
    }

    async actionOnGaragePages(e: CustomEvent, garageView: Garage) {
        const nextPage = Number(e?.detail?.nextPage);
        this.appState.currentGaragePage = nextPage;
        garageView.renderCarsOnPage();
    }
}

export default App;

import ViewPages from './App/MainViews';
import { IAppState } from '../models/models';
import ControlInput from './App/ControlInput';
import { CUSTOM_EVENTS, GARAGE_ACTION, SORT_BY, SORT_DIR, WINNERS_ACTION } from '../constants/const';
import { Garage } from './App/GarageView';
import { Winners } from './App/WinnersView';

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
        winners: [],
        sortWinners: {
            sortDir: SORT_DIR.asc,
            sortBy: SORT_BY.id,
        },
    };
    viewPages = new ViewPages();
    controlInput = new ControlInput();

    init() {
        this.viewPages.init();
        const garageView = new Garage(this.appState, this.viewPages, this.controlInput);
        garageView.renderCarsOnPage();

        document.body.addEventListener(CUSTOM_EVENTS.garage, (e) => this.actionOnCars(<CustomEvent>e, garageView));
        document.body.addEventListener(CUSTOM_EVENTS.garagePaginate, (e) =>
            this.actionOnGaragePages(<CustomEvent>e, garageView)
        );

        const winnersView = new Winners(this.appState);
        winnersView.renderWinnersOnPage();

        document.body.addEventListener(CUSTOM_EVENTS.winners, (e) => this.actionOnWinners(<CustomEvent>e, winnersView));
        document.body.addEventListener(CUSTOM_EVENTS.winnersPaginate, (e) =>
            this.actionOnWinnersPages(<CustomEvent>e, winnersView)
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

    async actionOnWinners(e: CustomEvent, winnersView: Winners) {
        const action = e?.detail?.action;
        const { sortBy, sortDir } = e?.detail;
        if (!action) {
            return;
        }

        switch (action) {
            case WINNERS_ACTION.render:
                winnersView.renderWinnersOnPage();
                break;
            case WINNERS_ACTION.sort:
                winnersView.renderWinnersOnPage(sortBy, sortDir);
                break;
        }
    }

    async actionOnGaragePages(e: CustomEvent, garageView: Garage) {
        const nextPage = Number(e?.detail?.nextPage);
        this.appState.currentGaragePage = nextPage;
        garageView.renderCarsOnPage();
    }

    async actionOnWinnersPages(e: CustomEvent, winnersView: Winners) {
        const nextPage = Number(e?.detail?.nextPage);
        this.appState.currentWinnersPage = nextPage;
        winnersView.renderWinnersOnPage();
    }
}

export default App;

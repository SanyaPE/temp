interface IElements {
    [index: string]: HTMLElement | null;
}

interface ICar {
    id: number;
    name: string;
    color: string;
    animation?: Animation;
}

interface IAppState {
    currentGaragePage: number;
    currentWinnersPage: number;
    selectedCar: {
        id: number;
        name: string;
        color: string;
    };
    carsToRace: Array<ICar>;
    totalCars: number;
    totalWinners: number;
}

interface IControlInput {
    color: string;
    name: string;
    id?: string | number;
    controls: { [index: string]: HTMLInputElement };
}

interface IParam {
    name: string;
    color: string;
    id?: string;
}

interface IMainView {
    mainView: string;
    elements: IElements;
}

export { IElements, ICar, IControlInput, IParam, IAppState, IMainView };

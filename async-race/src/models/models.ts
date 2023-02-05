interface IElements {
    [index: string]: HTMLElement | null;
}

interface ICar {
    id: number;
    name: string;
    color: string;
    animation?: Animation;
}

interface ICarParam {
    name: string;
    color: string;
    id?: string;
}

interface IWinner {
    id: number;
    name: string;
    color: string;
    wins: number;
    time: number;
}

interface IWinnerParam {
    id: number;
    wins: number;
    time: number;
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
    winners: Array<IWinner>;
}

interface IControlInput {
    color: string;
    name: string;
    id?: string | number;
    controls: { [index: string]: HTMLInputElement };
}

interface IMainView {
    mainView: string;
    elements: IElements;
}

export { IElements, ICar, ICarParam, IWinner, IWinnerParam, IControlInput, IAppState, IMainView };

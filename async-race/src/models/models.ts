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
    watchInput(): void;
}

interface IParam {
    name: string;
    color: string;
    id?: string;
}

export { IElements, ICar, IControlInput, IParam, IAppState };

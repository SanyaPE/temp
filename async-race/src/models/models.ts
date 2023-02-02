interface IElements {
    [index: string]: HTMLElement | null;
}

interface IAnimate {
    [index: string]: any;
}

interface ICar {
    [index: string]: string;
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

export { IElements, ICar, IControlInput, IParam, IAnimate };

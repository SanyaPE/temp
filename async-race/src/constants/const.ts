const PAGE_VALUE = 7;
const PAGE_WINNERS = 10;

const VIEW_GARAGE = 'garage';
const VIEW_WINNERS = 'winners';

const BASE_URL = 'http://127.0.0.1:3000';
const PATH = {
    garage: '/garage',
    engine: '/engine',
    winners: '/winners',
};

const CAR_GENERATE_COUNT = 100;
const CAR_BRANDS = [
    'Audi',
    'Cadillac',
    'Ferrari',
    'Infiniti',
    'Jaguar',
    'Lamborghini',
    'Lotus',
    'Maserati',
    'Porsche',
    'Tesla',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Citroen',
    'Alfa Romeo',
    'Geely',
    'Honda',
    'Hyundai',
    'Mercedes-Benz',
    'Mitsubishi',
    'Peugeot',
    'Rover',
    'SEAT',
    'Suzuki',
    'Toyota',
    'Volkswagen',
    'Volvo',
];
const BUTTONS = ['create', 'update', 'race', 'reset', 'generate', 'select', 'remove', 'start', 'stop', 'img', 'page'];

export { PAGE_VALUE, PAGE_WINNERS, BASE_URL, PATH, CAR_GENERATE_COUNT, CAR_BRANDS, BUTTONS, VIEW_GARAGE, VIEW_WINNERS };

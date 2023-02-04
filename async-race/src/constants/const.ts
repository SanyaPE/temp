const CARS_ON_PAGE = 7;
const WINNERS_ON_PAGE = 10;

const VIEWS = {
    garage: 'garage',
    winners: 'winners',
};

const BASE_URL = 'http://127.0.0.1:3000';
const PATH = {
    garage: '/garage',
    engine: '/engine',
    winners: '/winners',
};

const ACTION = {
    action: 'action',
    create: 'create',
    update: 'update',
    race: 'race',
    reset: 'reset',
    generate: 'generate',
    select: 'select',
    remove: 'remove',
    start: 'start',
    stop: 'stop',
    page: 'page',
};

const CAR_GENERATE_COUNT = 100;

const BUTTONS = ['create', 'update', 'race', 'reset', 'generate', 'select', 'remove', 'start', 'stop', 'img', 'page'];

export { CARS_ON_PAGE, WINNERS_ON_PAGE, BASE_URL, PATH, CAR_GENERATE_COUNT, BUTTONS, VIEWS, ACTION };

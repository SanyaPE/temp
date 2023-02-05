import { CARS_ON_PAGE, BASE_URL, PATH } from '../constants/const';
import { ICarParam, ICar } from '../models/models';

export default class ApiGarage {
    static async getCars(page?: number) {
        const url = `${BASE_URL}${PATH.garage}?_page=${page}&_limit=${CARS_ON_PAGE}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    static async getCount() {
        const url = `${BASE_URL}${PATH.garage}?_page=1&_limit=${CARS_ON_PAGE}`;
        try {
            const res = await fetch(url);
            const countPages = res.headers.get('X-Total-Count');
            return countPages;
        } catch (err) {
            console.log(err);
        }
    }

    static async createCar(carParam: ICarParam) {
        const url = `${BASE_URL}${PATH.garage}`;
        const param = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carParam),
        };
        try {
            const res = await fetch(url, param);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    static async deleteCar(id: number) {
        const url = `${BASE_URL}${PATH.garage}/${id}`;
        const param = {
            method: 'DELETE',
        };
        try {
            const res = await fetch(url, param);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    static async updateCar({ id, name, color }: ICar) {
        const url = `${BASE_URL}${PATH.garage}/${id}`;
        const param = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, color }),
        };
        try {
            const res = await fetch(url, param);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    static async startEngine(id: number) {
        const url = `${BASE_URL}${PATH.engine}?id=${id}&status=started`;
        const param = {
            method: 'PATCH',
        };
        try {
            const res = await fetch(url, param);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    static async stopEngine(id: number) {
        const url = `${BASE_URL}${PATH.engine}?id=${id}&status=stopped`;
        const param = {
            method: 'PATCH',
        };
        try {
            const res = await fetch(url, param);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log('Car with such id was not found in the garage.', err);
        }
    }

    static async driveEngine(id: number) {
        const url = `${BASE_URL}${PATH.engine}?id=${id}&status=drive`;
        const param = {
            method: 'PATCH',
        };
        const res = await fetch(url, param);
        const data = await res.json();
        return data;
    }
}

import { PAGE_VALUE, BASE_URL, PATH } from '../constants/const';
import { IParam } from '../models/models';

export default class Client {
    async getCars(page?: number) {
        const url = `${BASE_URL}${PATH.garage}?_page=${page}&_limit=${PAGE_VALUE}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    async getCount() {
        const url = `${BASE_URL}${PATH.garage}?_page=1&_limit=${PAGE_VALUE}`;
        try {
            const res = await fetch(url);
            const countPages = res.headers.get('X-Total-Count');
            return countPages;
        } catch (err) {
            console.log(err);
        }
    }

    async createCar(carParam: IParam) {
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

    async deleteCar(id: string) {
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

    async updateCar(name: string, color: string, id: string) {
        const url = `${BASE_URL}${PATH.garage}/${id}`;
        const param = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, color: color }),
        };
        try {
            const res = await fetch(url, param);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    async startEngine(id: string) {
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

    static async stopEngine(id: string) {
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
}

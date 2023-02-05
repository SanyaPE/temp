import { BASE_URL, PATH, SORT_BY, SORT_DIR, WINNERS_ON_PAGE } from '../constants/const';
import { IWinnerParam } from '../models/models';

export default class ApiWinners {
    static async getWinners(page = 1, sortBy = SORT_BY.id, sortDir = SORT_DIR.asc) {
        const url = `${BASE_URL}${PATH.winners}?_page=${page}&_limit=${WINNERS_ON_PAGE}&_sort=${sortBy}&_order=${sortDir}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    static async getWinner(id = 1) {
        const url = `${BASE_URL}${PATH.winners}/${id}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    static async getCount() {
        const url = `${BASE_URL}${PATH.winners}?_page=1&_limit=${WINNERS_ON_PAGE}`;
        try {
            const res = await fetch(url);
            const countPages = res.headers.get('X-Total-Count');
            return countPages;
        } catch (err) {
            console.log(err);
        }
    }

    static async createWinner(carParam: IWinnerParam) {
        const url = `${BASE_URL}${PATH.winners}`;
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

    static async deleteWinner(id: number) {
        const url = `${BASE_URL}${PATH.winners}/${id}`;
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

    static async updateWinner({ id, wins, time }: IWinnerParam) {
        const url = `${BASE_URL}${PATH.winners}/${id}`;
        const param = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ wins, time }),
        };
        try {
            const res = await fetch(url, param);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }
}

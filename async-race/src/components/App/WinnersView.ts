import { SORT_BY, SORT_DIR, VIEWS } from '../../constants/const';
import { IAppState, IWinner } from '../../models/models';
import Pagination from '../Common/Pagination';
import ApiWinners from '../../api/apiWinners';
import Winner from './Winner';
import ApiGarage from '../../api/apiGarage';

export class Winners {
    appState;
    pagination = new Pagination(VIEWS.winners);
    apiWinners = ApiWinners;
    apiGarage = ApiGarage;

    constructor(appState: IAppState) {
        this.appState = appState;
    }

    async renderWinnersOnPage(sortBy = SORT_BY.id, sortDir = SORT_DIR.asc) {
        const { currentWinnersPage } = this.appState;
        const winnersTable = document.getElementById('winners');
        if (!winnersTable) {
            return;
        }

        try {
            this.appState.winners = <Array<IWinner>>(
                await this.apiWinners.getWinners(currentWinnersPage, sortBy, sortDir)
            );

            const cars = await Promise.all(this.appState.winners.map((winner) => this.apiGarage.getCar(winner.id)));
            this.appState.winners.forEach((winner, idx) => {
                winner.name = cars[idx].name;
                winner.color = cars[idx].color;
            });

            winnersTable.replaceChildren();
            Object.values(this.appState.winners).forEach((winnerData, idx) => {
                const idInWinnersTable = (this.appState.currentWinnersPage - 1) * 10 + idx + 1;
                new Winner(<IWinner>winnerData, idInWinnersTable).appendTo(winnersTable);
            });

            this.appState.totalWinners = Number(await this.apiWinners.getCount()) || 0;
            const { totalWinners } = this.appState;
            this.pagination.paginate(totalWinners, currentWinnersPage);
        } catch (err) {
            winnersTable.textContent = 'NO CONNECTION TO API';
        }
    }
}

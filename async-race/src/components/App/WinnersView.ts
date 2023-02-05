import { VIEWS } from '../../constants/const';
import { IAppState, IWinner } from '../../models/models';
import Pagination from '../Common/Pagination';
import ApiWinners from '../../api/apiWinners';
import Winner from './Winner';

export class Winners {
    appState;
    pagination = new Pagination(VIEWS.winners);
    apiWinners = ApiWinners;

    constructor(appState: IAppState) {
        this.appState = appState;
    }

    async renderWinnersOnPage() {
        const { currentWinnersPage } = this.appState;
        const winnersTable = document.getElementById('winners');
        if (!winnersTable) {
            return;
        }

        try {
            this.appState.winners = <Array<IWinner>>await this.apiWinners.getWinners(currentWinnersPage);

            winnersTable.replaceChildren();
            Object.values(this.appState.winners).forEach((winnerData) => {
                new Winner(<IWinner>winnerData).appendTo(winnersTable);
            });

            this.appState.totalWinners = Number(await this.apiWinners.getCount()) || 0;
            console.log(this.appState.totalWinners);
            const { totalWinners } = this.appState;
            this.pagination.paginate(totalWinners, currentWinnersPage);
        } catch (err) {
            winnersTable.textContent = 'NO CONNECTION TO API';
        }
    }
}

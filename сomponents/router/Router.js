import Controller from '../controllers/Controller.js';
import urlRoutes from './urlRoutes.js';

export default {
    async init() {
        Controller.routerLayout();
        this.handleRoute();
        document.addEventListener('click', (e) => {
            const target = e.target.closest('.nav__item');
            if (!target) return;
            else {
                e.preventDefault();
                const targetPath = target.pathname;
                this.setNewUrl(targetPath);
                this.handleRoute();
            }
        });
        window.addEventListener('popstate', () => {
            this.handleRoute();
        });
    },
    handleRoute() {
        const { route, search } = this.getRouteInfo();
        Controller.routerPage(route.page, search);
        this.setPage(route.title);
    },
    getRouteInfo() {
        const location = window.location.pathname;
        const search = window.location.search;
        if (location.length == 0) location = '/';
        const route = urlRoutes[location] || urlRoutes['404'];
        return { route, search };
    },
    setPage(title) {
        document.title = title;
    },
    setNewUrl(path) {
        const origin = document.location.origin;
        const url = new URL(path, origin);
        history.pushState({}, '', url);
    },
};

import * as offers from './assets/offers.json';
import { AdvertList } from './components';
import { domReady } from './helpers/dom-ready';
import { IAdvert } from './models';

class App {
    private offers: Array<IAdvert> = offers.default;

    constructor() {
        this.init();
    }

    private init(): void {
        const $app = document.getElementById('app') as HTMLElement;
        $app.appendChild(new AdvertList(this.offers).render());
    }
}

domReady(new App());

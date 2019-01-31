import * as offers from './assets/offers.json';
import { AdvertList } from './components';
import { domReady } from './helpers/dom-ready';
import { IAdvert } from './models';

import './main.scss';

class App {
    private offers: Array<IAdvert> = offers.default;

    constructor() {
        this.init();
    }

    private init(): void {
        this.setAdvertId();
        this.render();
    }

    private setAdvertId(): Array<IAdvert> {
        this.offers.map((offer: IAdvert, index: number) => {
            offer.id = index;
        });

        return this.offers;
    }
    private render(): void {
        const $app = document.getElementById('app') as HTMLElement;
        $app.appendChild(new AdvertList(this.offers).render());
    }
}

domReady(new App());

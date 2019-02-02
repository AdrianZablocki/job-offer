import * as _ from 'lodash';

import * as adverts from './assets/offers.json';
import { AdvertList } from './components';
import { domReady } from './helpers/dom-ready';
import { IAdvert } from './models';

import './main.scss';

class App {
    private adverts: Array<IAdvert> = adverts.default;
    private selectedAdvert: Array<IAdvert>;

    constructor() {
        this.init();
    }

    private init(): void {
        this.setAdvertId();
        this.render();
    }

    private setAdvertId(): Array<IAdvert> {
        this.adverts.map((advert: IAdvert, index: number) => {
            advert.id = index;
        });

        return this.adverts;
    }
    private render(): void {
        const $app = document.getElementById('app') as HTMLElement;
        $app.appendChild(new AdvertList(this.adverts).render());

        const advertItems: NodeListOf<Element> = document.querySelectorAll('.advert-item');
        this.addAdvertClickEvent(advertItems);
    }

    private addAdvertClickEvent(elements: NodeListOf<Element>): void {
        _.map(elements, (element: Element) => {
            element.addEventListener('click', (e: Event) => {
                e.preventDefault();

                this.selectedAdvert = _.filter(this.adverts, (advert: IAdvert) => {
                    return advert.id === Number(element.id);
                });
                console.log('selected advert: ', this.selectedAdvert);
            }, false);
        });
    }
}

domReady(new App());

import * as _ from 'lodash';

import * as adverts from './assets/offers.json';
import { AdvertList, AdvertSlider } from './components';
import { domReady } from './helpers/dom-ready';
import { IAdvert } from './models';

import './main.scss';

class App {
    private adverts: Array<IAdvert> = adverts.default;
    private selectedAdvert: IAdvert = this.adverts[0];
    private selectedAdvertId: number;
    private $offersList: HTMLElement;

    constructor() {
        this.init();
    }

    private init(): void {
        this.setAdvertId();
        this.render();
        this.$offersList = document.getElementById('jobOffers') as HTMLElement;
    }

    private render(): void {
        this.addOffersList(this.adverts);
        this.addOffersSlider(this.selectedAdvert);
    }

    private setAdvertId(): Array<IAdvert> {
        this.adverts.map((advert: IAdvert, index: number) => {
            advert.id = index;
        });
        this.selectedAdvertId = Number(this.adverts[0].id);

        return this.adverts;
    }

    private addAdvertClickEvent(elements: NodeListOf<Element>): void {
        _.map(elements, (element: Element) => {
            element.addEventListener('click', (e: Event) => {
                e.preventDefault();

                this.setSelectedAdvert(Number(element.id));
            }, false);
        });
    }

    private addOffersSlider(selectedAdvert: IAdvert): void {
        const $offersSlider: HTMLElement = document.getElementById('offersSlider') as HTMLElement;
        $offersSlider.innerHTML = new AdvertSlider(selectedAdvert).render();

        this.selectedAdvertId = Number(selectedAdvert.id);
        this.setPrevOffer();
        this.setNextOffer();
        this.toggleAdvertList();
    }

    private addOffersList(advertsList: Array<IAdvert>): void {
        const $jobOffers: HTMLElement = document.getElementById('jobOffers') as HTMLElement;
        $jobOffers.appendChild(new AdvertList(advertsList).render());

        const advertItems: NodeListOf<Element> = document.querySelectorAll('.advert-item');
        this.addAdvertClickEvent(advertItems);
    }

    private setPrevOffer(): void {
        const $arrowLeft: HTMLElement = document.getElementById('arrowLeft') as HTMLElement;
        $arrowLeft.addEventListener('click', (e) => {
            e.preventDefault();
            this.selectedAdvertId--;
            if (this.selectedAdvertId < 0) {
                this.selectedAdvertId = this.adverts.length - 1;
            }
            this.setSelectedAdvert(this.selectedAdvertId);
        }, false);
    }

    private setNextOffer(): void {
        const $arrowLeft: HTMLElement = document.getElementById('arrowRight') as HTMLElement;
        $arrowLeft.addEventListener('click', (e) => {
            e.preventDefault();
            this.selectedAdvertId++;
            if (this.selectedAdvertId > this.adverts.length - 1) {
                this.selectedAdvertId = 0;
            }
            this.setSelectedAdvert(this.selectedAdvertId);
        }, false);
    }

    private setSelectedAdvert(id: number) {
        const selectedAdvert: Array<IAdvert> = _.filter(this.adverts, (advert: IAdvert) => {
            return advert.id === id;
        });
        this.selectedAdvert = selectedAdvert[0];
        this.addOffersSlider(this.selectedAdvert);
        this.$offersList.classList.remove('show');
    }

    private toggleAdvertList() {
        const $hamburger: HTMLElement = document.getElementById('hamburger') as HTMLElement;
        const $arrow: HTMLElement = document.getElementById('arrow') as HTMLElement;

        $hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            this.$offersList.classList.add('show');
        }, false);

        $arrow.addEventListener('click', (e) => {
            e.preventDefault();
            this.$offersList.classList.remove('show');
        }, false);
    }
}

domReady(new App());

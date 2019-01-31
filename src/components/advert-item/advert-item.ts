import { IAdvert } from '../../models';

import './advert-item.scss';

export class AdvertItem {
    constructor(private advert: IAdvert, private advertId: number) { }

    public render(): string {
        return `
            <li class="advert-item" id="${this.advertId}">
                <div class="advert-item__header">
                    <span class="advert-item__location">${this.advert.location}</span>
                    <span class="advert-item__position">${this.advert.position}</span>
                    <h2 class="advert-item__company">${this.advert.company}</h2>
                </div>
                <div class="advert-item__content"></div>
            </li>
        `;
    }
}

import { IAdvert } from '../../models';

export class AdvertItem {
    constructor(private advert: IAdvert) { }

    public render(): string {
        return `
            <li class="advert-item" id="${this.advert.id}">
                <div class="advert-item__header">
                    <span class="advert-item__location">${this.advert.location} | </span>
                    <span class="advert-item__position">${this.advert.position}</span>
                    <h2 class="advert-item__company">${this.advert.company}</h2>
                </div>
                <span class="advert-item__share" id="share-${this.advert.id}"></span>
            </li>
        `;
    }
}

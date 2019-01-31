import { IContent } from '../../models';

export class AdvertItem {
    constructor() { }

    public render(content: IContent) {
        return `
            <div class="advert-item">
                <header class="advert-item__header">
                    <span class="advert-item__location">${content.location}</span>
                    <span class="advert-item__position">${content.position}</span>
                    <h2 class="advert-item__company">${content.company}</h2>
                </header>
                <div class="advert-item__content"></div>
            </div>
        `;
    }
}

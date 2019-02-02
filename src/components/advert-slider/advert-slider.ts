import { IAdvert } from '../../models';

import './advert-slider.scss';

export class AdvertSlider {
    constructor(private advert: IAdvert) { }

    public render(): string {
        return `
            <div>
                <header>
                    <h1>${this.advert.position}</h1>
                    <div>hamburger</div>
                </header>
                <div>
                    <div>${this.advert.company}</div>
                    <div>${this.advert.location}</div>
                </div>
                <div>
                    <span id="arrowLeft">arrow left</span>
                    <span id="arrowRight">arrow right</span>
                </div>
            </div>
        `;
    }
}

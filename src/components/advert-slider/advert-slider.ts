import { IAdvert } from '../../models';

export class AdvertSlider {
    constructor(private advert: IAdvert) { }

    public render(): string {
        return `
            <div class="advert-slider">
                <header class="advert-slider__header">
                    <h1>${this.advert.position}</h1>
                    <div>hamburger</div>
                </header>
                <div>
                    <div>${this.advert.company}</div>
                    <div>${this.advert.location}</div>
                </div>
                <div>
                    <span class="advert-slider__arrow-prev" id="arrowLeft">prev</span>
                    <span class="advert-slider__arrow-next" id="arrowRight">next</span>
                </div>
            </div>
        `;
    }
}

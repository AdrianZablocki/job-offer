import { IAdvert } from '../../models';

export class AdvertSlider {
    constructor(private advert: IAdvert) { }

    public render(): string {
        return `
            <div class="advert-slider" style="background: url('${this.advert.img}') no-repeat center center; background-size: cover">
                <header class="advert-slider__header">
                    <h1 class="advert-slider__position">${this.advert.position}</h1>
                    <div class="advert-slider__hamburger">
                        <div class="advert-slider__hamburger-piece"></div>
                    </div>
                </header>
                <div class="advert-slider__content">
                    <div class="advert-slider__content-company">${this.advert.company}</div>
                    <div class="advert-slider__content-location">${this.advert.location}</div>
                </div>
                <div class="advert-slider__arrows-wrapper">
                    <span class="advert-slider__arrow-background" id="arrowLeft">
                        <div class="advert-slider__arrow advert-slider__arrow--prev"></div>
                    </span>
                    <span class="advert-slider__arrow-background" id="arrowRight">
                        <div class="advert-slider__arrow advert-slider__arrow--next"></div>
                    </span>
                </div>
            </div>
        `;
    }
}

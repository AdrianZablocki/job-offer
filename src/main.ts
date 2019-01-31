import { AdvertItem } from './components';
import { domReady } from './helpers/dom-ready';

class App {
    constructor() {
        this.init();
    }

    private init(): void {
        const $app = document.getElementById('app') as HTMLElement;
        const content = {
            company: 'GoldenLine',
            position: 'Front-end Developer',
            location: 'Warszawa'
        };
        const advert = new AdvertItem();
        $app.innerHTML = advert.render(content);
    }
}

domReady(new App());

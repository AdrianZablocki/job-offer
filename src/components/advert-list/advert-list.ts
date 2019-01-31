import { IAdvert } from '../../models';
import { AdvertItem } from '../advert-item';

import './advert-list.scss';

export class AdvertList {
    constructor(private advertList: Array<IAdvert>) { }

    public render(): HTMLElement {
        const listWrapper: HTMLElement = document.createElement('ul');
        listWrapper.classList.add('advert-list');

        this.advertList.map((advert: IAdvert, index: number) => {
            listWrapper.innerHTML += new AdvertItem(advert).render();
        });

        return listWrapper;
    }
}

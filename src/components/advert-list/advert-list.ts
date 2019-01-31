import { IAdvert } from '../../models';
import { AdvertItem } from '../advert-item';

import './advert-list.scss';

export class AdvertList {
    constructor(private advertList: Array<IAdvert>) { }

    public render(): HTMLElement {
        const listWrapper: HTMLElement = document.createElement('ul');

        this.advertList.map((advert: IAdvert, index: number) => {
            listWrapper.innerHTML += new AdvertItem(advert, index).render();
        });

        return listWrapper;
    }
}

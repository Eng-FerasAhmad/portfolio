import { Common } from 'types/common';
import { Pages } from 'types/pageType';

export interface BlogViewModel {
    entityHeader: string;
    title: string;
    description: string;
    slides: Array<Slides>;
    pages: Pages;
    common: Common;
}

export interface Slides {
    title: string;
    textTop: string;
    textMid: string;
    textBottom: string;
    image: string;
}

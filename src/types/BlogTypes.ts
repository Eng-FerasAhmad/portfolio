import { Pages } from 'types/pageType';

export interface BlogViewModel {
    entityHeader: string;
    title: string;
    description: string;
    slides: Array<Slides>;
    pages: Pages;
}

export interface Slides {
    title: string;
    textTop: string;
    textMid: string;
    textBottom: string;
    image: string;
}

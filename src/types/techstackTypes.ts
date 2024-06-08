import { Common } from 'types/common';
import { Pages } from 'types/pageType';

export interface TechstackViewModel {
    entityHeader: string;
    pages: Pages;
    worksTitle: string;
    works: Array<Works>;
    common: Common;
}

export interface Works {
    label: string;
    title: string;
    description: '';
    icons: Array<Icons>;
}

export interface Icons {
    id: string;
    name: string;
    icon: string;
}

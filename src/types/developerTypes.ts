import { Common } from 'types/common';
import { Pages } from 'types/pageType';

export interface DeveloperViewModel {
    entityHeader: string;
    title: string;
    name: string;
    about: string;
    aboutMore: string;
    socialAccount: Array<SocialAccount>;
    language: Array<string>;
    pages: Pages;
    common: Common;
}

export interface SocialAccount {
    name: string;
    url: string;
    visible: boolean;
}

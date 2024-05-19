import { Pages } from 'types/pageType';

export interface DeveloperViewModel {
    entityHeader: string;
    title: string;
    name: string;
    about: string;
    socialAccount: Array<SocialAccount>;
    language: Array<string>;
    pages: Pages;
}

export interface SocialAccount {
    name: string;
    url: string;
    visible: boolean;
}

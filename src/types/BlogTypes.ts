import { Common } from 'types/common';
import { Pages } from 'types/pageType';

export interface BlogViewModel {
    entityHeader: string;
    title: string;
    description: string;
    pages: Pages;
    common: Common;
    publish: Publish;
    comingSoon: ComingSoon;
}

export interface Publish {
    title: string;
    articles: Array<PublishArticles>;
}

export interface PublishArticles {
    id: string;
    title: string;
    icon: string;
    dateOfPublish: string;
    author: string;
    isNew: boolean;
}
export interface PublishContent {
    type: string;
    text: string;
}

export interface ComingSoon {
    title: string;
    articles: Array<ComingArticles>;
}

export interface ComingArticles {
    title: string;
    icon: string;
    author: string;
}

export interface BlogViewModel {
    entityHeader: string;
    title: string;
    description: string;
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

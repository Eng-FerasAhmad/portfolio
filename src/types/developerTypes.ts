export interface DeveloperViewModel {
    entityHeader: string;
    title: string;
    name: string;
    about: string;
    aboutMore: string;
    socialAccount: Array<SocialAccount>;
    language: Array<string>;
}

export interface SocialAccount {
    name: string;
    url: string;
    visible: boolean;
}

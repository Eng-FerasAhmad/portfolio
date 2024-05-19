import { Pages } from 'types/pageType';

export interface ContactViewModel {
    entityHeader: string;
    title: string;
    description: string;
    form: FormViewModel;
    media: Array<MediaViewModel>;
    pages: Pages;
}

export interface FormViewModel {
    name: string;
    subject: string;
    email: string;
    message: string;
    send?: string;
    error?: string;
}

export interface MediaViewModel {
    name: string;
    icon: string;
    link: string;
}

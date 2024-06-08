import { Common } from 'types/common';
import { Pages } from 'types/pageType';

export interface ContactViewModel {
    entityHeader: string;
    title: string;
    description: string;
    form: ContactForm;
    media: Array<MediaViewModel>;
    pages: Pages;
    common: Common;
}

export interface ContactForm {
    name: string;
    subject: string;
    email: string;
    message: string;
    send?: string;
    error?: string;
    invalidMail?: string;
    messageSent?: string;
}

export interface MediaViewModel {
    name: string;
    icon: string;
    link: string;
}

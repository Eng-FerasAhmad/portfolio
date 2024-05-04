export interface ContactViewModel {
    title: string;
    description: string;
    form: Array<FormViewModel>;
    media: Array<MediaViewModel>;
}

export interface FormViewModel {
    name: string;
    subject: string;
    email: string;
    message: string;
    send: string;
}

export interface MediaViewModel {
    name: string;
    icon: string;
    link: string;
}

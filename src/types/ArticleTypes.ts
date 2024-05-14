export interface ArticleViewModel {
    entityHeader: string;
    title: string;
    description: string;
    slides: Array<Slides>;
}

export interface Slides {
    title: string;
    textTop: string;
    textMid: string;
    textBottom: string;
    image: string;
}

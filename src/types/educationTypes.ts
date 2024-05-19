import { Pages } from 'types/pageType';

export interface EducationViewModel {
    title: string;
    start: string;
    end: string;
    country: string;
    visible: boolean;
    pages: Pages;
}

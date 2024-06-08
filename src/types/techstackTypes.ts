import { Common } from 'types/common';
import { Pages } from 'types/pageType';

export interface TechstackViewModel {
    entityHeader: string;
    categories: Array<Category>;
    pages: Pages;
    worksTitle: string;
    works: Array<Works>;
    common: Common;
}

export interface Category {
    name: string;
    skills: Array<Skills>;
}

export interface Skills {
    id: string;
    name: string;
    icon: string;
    level: SkillLevel;
    percent: number;
    homepage: string;
    color: string;
}

export type SkillLevel = 'Expert' | 'Professional' | 'Beginner';

export interface Works {
    label: '';
    title: '';
    description: '';
    icons: Array<Icons>;
}

export interface Icons {
    id: 'react';
    name: 'React';
    icon: 'react';
}

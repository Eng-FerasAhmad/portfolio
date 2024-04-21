export interface TechstackViewModel {
    entityHeader: string;
    categories: Array<Category>;
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

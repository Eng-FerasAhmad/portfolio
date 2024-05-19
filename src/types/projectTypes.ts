import { Pages } from 'types/pageType';

export interface ProjectViewModel {
    company: string;
    projectName: string;
    projectLink: string;
    skills: Array<string>;
    role: string;
    start: string;
    end: string;
    language: Array<string>;
    branch: Array<Branch>;
    task: Array<ProjectTasks>;
    pages: Pages;
}

export interface ProjectTasks {
    id: TasksId;
    title: string;
}

export enum TasksId {
    DOCUMENTAION = 'Documentation',
    TESTING = 'testing',
    CODE_REVIEW = 'code_review',
    DEBUGGING = 'debugging',
    PLANEN = 'planen',
    IMPLEMNTIEREN = 'implementation',
    DEPLOYMENT = 'deployment',
    TRAINING = 'training',
}

export enum Branch {
    MEDIA = 'media',
}

export const boxIconsSizeMobile = 35;
export const boxIconsSizeTablet = 50;
export const boxIconsSizeDesktop = 60;

export enum WorksBox {
    DEVELOP,
    DESIGN,
    BUILD,
    TEST,
    TECH,
    KNOW,
}

export enum WorksBoxName {
    DEVELOP = 'develop',
    DESIGN = 'design',
    BUILD = 'build',
    TEST = 'test',
    TECH = 'tech',
    KNOW = 'know',
}

export interface WorksProps {
    box: WorksBox;
    dark: boolean;
}

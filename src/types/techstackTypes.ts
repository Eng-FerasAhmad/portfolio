export interface TechstackViewModel {
    entityHeader: string;
    worksTitle: string;
    works: Array<Works>;
}

export interface Works {
    label: string;
    title: string;
    description: '';
    icons: Array<Icons>;
}

export interface Icons {
    id: string;
    name: string;
    icon: string;
}

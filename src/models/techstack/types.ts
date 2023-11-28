export interface TechstackViewModel {
  entityHeader: string;
  techstack: Techstack;
}

export interface Techstack {
  category: string;
  skills: Array<Skills>;
}

export interface Skills {
  id: SkillsId;
  name: string;
  log: string;
  level: SkillLevel;
  percent: number;
  homepage: string;
}

export type SkillLevel = 'Senior' | 'Professional' | 'Junior'

export enum SkillsId {
  REACT = 'react',
  VUE = 'vue',
}

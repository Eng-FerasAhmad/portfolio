export interface EntryViewModel {
  count: number;
  entries: Array<Entries>;
}

export interface Entries {
  api: string;
  description: string;
  auth: string;
  https: boolean;
  cors: string;
  link: string;
  category: string;
}

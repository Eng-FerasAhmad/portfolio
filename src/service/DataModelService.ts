import { DataModel, Language, baseUrl } from './types';

const modelData = new Map<DataModel, string>([
  [DataModel.CONTACT, 'contact'],
  [DataModel.DEVELOPER, 'developer'],
  [DataModel.EDUCATION, 'education'],
  [DataModel.PROJECT, 'project'],
  [DataModel.TECHSTACK, 'techstack'],
]);

const languageData = new Map<Language, string>([
  [Language.DE, 'data-de'],
  [Language.EN, 'data-en'],
]);

export default async function dataModelService<T>(
  dataModel: DataModel,
  lang: Language
): Promise<T> {
  const model = modelData.get(dataModel);
  const language = languageData.get(lang);
  const response = await fetch(`${baseUrl}/${model!}/${language}.json`);
  const data = response.json() as T;
  return data;
}

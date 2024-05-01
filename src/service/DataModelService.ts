import { DataModel, Language } from './types';

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

export default function dataModelService<T>(
    dataModel: DataModel,
    lang: Language
): Promise<T> {
    const model = modelData.get(dataModel);
    const language = lang
        ? languageData.get(lang)
        : languageData.get(Language.EN);
    const data = fetch(`/data/${model!}/${language}.json`).then(
        (res) => {
            return res.json() as T;
        }
    );

    return data;
}

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import dataModelService from '../../../service/DataModelService';
import { DataModel } from '../../../service/types';
import { ArticleViewModel } from '../../../types/ArticleTypes';

interface UseArticle {
    viewModel: ArticleViewModel | undefined;
}

export default function useArticle(): UseArticle {
    const { language } = useContext(ThemeContext);
    const [viewModel, setViewModel] = useState<ArticleViewModel | undefined>(
        undefined
    );

    useEffect(() => {
        dataModelService<ArticleViewModel>(DataModel.ARTICLE, language).then(
            (data) => {
                setViewModel(data);
            }
        );
    }, [language]);

    return { viewModel };
}

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import dataModelService from 'service/DataModelService';
import { DataModel } from 'service/types';
import { BlogViewModel } from 'types/BlogTypes';

interface UseBlog {
    viewModel: BlogViewModel | undefined;
}

export default function useArticle(): UseBlog {
    const { language } = useContext(ThemeContext);
    const [viewModel, setViewModel] = useState<BlogViewModel | undefined>(
        undefined
    );

    useEffect(() => {
        dataModelService<BlogViewModel>(DataModel.BLOG, language).then(
            (data) => {
                setViewModel(data);
            }
        );
    }, [language]);

    return { viewModel };
}

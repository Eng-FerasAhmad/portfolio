import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import dataModelService from 'service/DataModelService';
import { DataModel } from 'service/types';
import { CommonViewModel } from 'types/common';

interface UseCommon {
    viewModel: CommonViewModel | undefined;
}

export default function useHeader(): UseCommon {
    const { language } = useContext(ThemeContext);
    const [viewModel, setViewModel] = useState<CommonViewModel | undefined>(
        undefined
    );

    useEffect(() => {
        dataModelService<CommonViewModel>(DataModel.COMMON, language).then(
            (data) => {
                setViewModel(data);
            }
        );
    }, [language]);

    return { viewModel };
}

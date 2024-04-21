import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import dataModelService from '../../../service/DataModelService';
import { DataModel } from '../../../service/types';
import { DeveloperViewModel } from '../../../types/developerTypes';

interface UseDeveloper {
    viewModel: DeveloperViewModel | undefined;
}

export default function useDeveloper(): UseDeveloper {
    const { language } = useContext(ThemeContext);
    const [viewModel, setViewModel] = useState<DeveloperViewModel | undefined>(
        undefined
    );

    useEffect(() => {
        dataModelService<DeveloperViewModel>(
            DataModel.DEVELOPER,
            language
        ).then((data) => {
            setViewModel(data);
        });
    }, [language]);

    return { viewModel };
}

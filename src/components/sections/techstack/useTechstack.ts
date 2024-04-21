import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import dataModelService from '../../../service/DataModelService';
import { DataModel } from '../../../service/types';
import { TechstackViewModel } from '../../../types/techstackTypes';

interface UseTechstack {
    viewModel: TechstackViewModel | undefined;
}

export default function useTechstack(): UseTechstack {
    const { language } = useContext(ThemeContext);
    const [viewModel, setViewModel] = useState<TechstackViewModel | undefined>(
        undefined
    );

    useEffect(() => {
        if (!language) return;

        dataModelService<TechstackViewModel>(
            DataModel.TECHSTACK,
            language
        ).then((data) => {
            setViewModel(data);
        });
    }, [language]);

    return { viewModel };
}

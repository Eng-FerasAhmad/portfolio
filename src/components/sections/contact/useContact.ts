import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import dataModelService from '../../../service/DataModelService';
import { DataModel } from '../../../service/types';
import { ContactViewModel } from '../../../types/ContactTypes';

interface UseContact {
    viewModel: ContactViewModel | undefined;
}

export default function useContact(): UseContact {
    const { language } = useContext(ThemeContext);
    const [viewModel, setViewModel] = useState<ContactViewModel | undefined>(
        undefined
    );

    useEffect(() => {
        dataModelService<ContactViewModel>(DataModel.CONTACT, language).then(
            (data) => {
                setViewModel(data);
            }
        );
    }, [language]);

    return { viewModel };
}

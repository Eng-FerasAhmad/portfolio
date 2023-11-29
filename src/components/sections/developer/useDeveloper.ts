import { useContext, useEffect, useState } from 'react';
import { DeveloperViewModel } from '../../../models/developer/types';
import { DataModel } from '../../../service/types';
import dataModelService from '../../../service/DataModelService';
import { ThemeContext } from '../../../context/ThemeContext';

interface UseDeveloper {
  viewModel: DeveloperViewModel | undefined;
}

export default function useDeveloper(): UseDeveloper {
  const { language } = useContext(ThemeContext);
  const [viewModel, setViewModel] = useState<DeveloperViewModel | undefined>(
    undefined
  );

  useEffect(() => {
    if (!language) return;

    dataModelService<DeveloperViewModel>(DataModel.DEVELOPER, language).then(
      (data) => {
        setViewModel(data);
      }
    );
  }, [language]);

  return { viewModel };
}

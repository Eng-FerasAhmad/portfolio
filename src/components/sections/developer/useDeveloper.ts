import { useContext, useEffect, useState } from 'react';
import { DeveloperViewModel } from '../../../../public/data/developer/types';
import { ThemeContext } from '../../../context/ThemeContext';
import dataModelService from '../../../service/DataModelService';
import { DataModel } from '../../../service/types';

interface UseDeveloper {
  viewModel: DeveloperViewModel | undefined;
}

export default function useDeveloper(): UseDeveloper {
  const { language } = useContext(ThemeContext);
  const [viewModel, setViewModel] = useState<DeveloperViewModel | undefined>(
    undefined
  );

  useEffect(() => {
    dataModelService<DeveloperViewModel>(DataModel.DEVELOPER, language).then(
      (data) => {
        setViewModel(data);
      }
    );
  }, [language]);

  return { viewModel };
}

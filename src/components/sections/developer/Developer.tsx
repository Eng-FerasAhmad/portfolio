import { useEffect, useState } from 'react';

import { DeveloperContainer } from "./styles";
import dataModelService from '../../../service/DataModelService';
import { DeveloperViewModel } from '../../../models/developer/types';
import { DataModel, Language } from '../../../service/types';

export default function Developer() {
  const [data, setData] = useState<DeveloperViewModel | undefined>(undefined);
  useEffect(() => {
    dataModelService<DeveloperViewModel>(DataModel.DEVELOPER, Language.EN).then((data) => {
      setData(data);
    }).catch((error) => {
      console.log('error', error.message)
    });
  }, []);

  return (
    <DeveloperContainer>
      Developer
      {data && data.about}
      <></>
    </DeveloperContainer>
  )
}

import { useEffect, useState } from 'react';

import { TechstackViewModel } from "../../../models/techstack/types";
import { DataModel, Language } from "../../../service/types";
import { TechstackContainer } from "./styles";
import dataModelService from '../../../service/DataModelService';

export default function Techstack() {
  const [data, setData] = useState<TechstackViewModel | undefined>(undefined);

  useEffect(() => {
    dataModelService<TechstackViewModel>(DataModel.TECHSTACK, Language.EN).then((data) => {
      setData(data);
    }).catch((error) => {
      console.log('error', error.message)
    });
  }, []);

  return (
    <TechstackContainer>
      <div>{data && data.entityHeader}</div>
    </TechstackContainer>
  )
}

import { Category } from '../../../../public/data/techstack/types';
import IconSelector from '../../../library/icon/icon-selector/IconSelector';
import ProgressBarComponent from '../../../library/progressbar/ProgressBar';
import {
  ItemContentWrapper,
  ItemWrapper,
  TechstackItemContainer,
  ItemNameWrapper,
  ExpertLabelWrapper,
} from './styles';

interface Props {
  category: Category | undefined;
}

export default function TechstackItem({ category }: Props): JSX.Element {
  return (
    <TechstackItemContainer>
      <div>{category?.name}</div>
      {category &&
        category.skills &&
        category.skills.map((ts) => {
          return (
            <ItemWrapper key={ts.id}>
              <ItemContentWrapper>
                <ItemNameWrapper>
                  <div>{ts.name}</div>
                  <div>
                    <IconSelector iconName={ts.icon} color={ts.color} />
                  </div>
                </ItemNameWrapper>
                <ProgressBarComponent color={ts.color} completed={ts.percent} />
                <ExpertLabelWrapper>{ts.level}</ExpertLabelWrapper>
              </ItemContentWrapper>
            </ItemWrapper>
          );
        })}
    </TechstackItemContainer>
  );
}

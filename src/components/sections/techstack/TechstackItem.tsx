import IconSelector from '../../../library/icon-selector/IconSelector';
import ProgressBarComponent from '../../../library/progressbar/ProgressBar';
import { color } from '../../../style/color';
import { Category } from '../../../types/techstackTypes';
import {
    ItemWrapper,
    ItemsGroupTitleWrapper,
    ItemsGroupWrapper,
    TechstackItemContainer,
} from './styles';

interface Props {
    category: Category | undefined;
}

export default function TechstackItem({ category }: Props): JSX.Element {
    return (
        <TechstackItemContainer>
            <ItemsGroupTitleWrapper>
                {category?.name}
                <ProgressBarComponent color={color.green} completed={100} />
            </ItemsGroupTitleWrapper>
            <ItemsGroupWrapper>
                {category &&
                    category.skills &&
                    category.skills.map((ts) => {
                        return (
                            <ItemWrapper key={ts.id} data-testid="item-wrapper">
                                <div>
                                    <IconSelector iconName={ts.icon} />
                                </div>
                                <div>{ts.name}</div>
                            </ItemWrapper>
                        );
                    })}
            </ItemsGroupWrapper>
        </TechstackItemContainer>
    );
}

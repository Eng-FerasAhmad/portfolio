import { ReactElement } from 'react';
import IconSelector from '../../../library/icon-selector/IconSelector';
import { Category } from '../../../types/techstackTypes';
import {
    ItemWrapper,
    ItemsGroupTitleWrapper,
    ItemsGroupWrapper,
    TechstackItemContainer,
} from './styles';
import { AnimationFadeIn } from 'style/animation';

interface Props {
    category: Category | undefined;
}

export default function TechstackItem({ category }: Props): ReactElement {
    return (
        <TechstackItemContainer data-testid="techstack-item">
            <AnimationFadeIn duration={1}>
                <ItemsGroupTitleWrapper>
                    {category?.name}
                </ItemsGroupTitleWrapper>
            </AnimationFadeIn>
            <ItemsGroupWrapper>
                {category &&
                    category.skills &&
                    category.skills.map((ts) => {
                        return (
                            <ItemWrapper key={ts.id} data-testid="item-wrapper">
                                <AnimationFadeIn duration={1}>
                                    <div>
                                        <IconSelector iconName={ts.icon} />
                                    </div>
                                    <div>{ts.name}</div>
                                </AnimationFadeIn>
                            </ItemWrapper>
                        );
                    })}
            </ItemsGroupWrapper>
        </TechstackItemContainer>
    );
}

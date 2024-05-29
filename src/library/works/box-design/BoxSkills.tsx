import { ReactElement } from 'react';
import { ItemWrapper } from 'components/sections/techstack/styles';
import IconSelector from 'src/library/icon-selector/IconSelector';
import { BoxSkillsContainer } from 'src/library/works/styles';
import { AnimationFadeIn } from 'style/animation';
import { Icons } from 'types/techstackTypes';

interface Props {
    icons: Icons[];
}
export default function BoxSkills({ icons }: Props): ReactElement {
    return (
        <BoxSkillsContainer>
            {icons &&
                icons.map((ts) => {
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
        </BoxSkillsContainer>
    );
}

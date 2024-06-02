import { ReactElement } from 'react';
import ReduxIcon from 'src/library/icon/redux/ReduxIcon';
import {
    BoxContainer,
    ItemWrapper,
    LabelWrapper,
    TechsWrapper,
} from 'src/library/works/styles';
import { WorksBox, WorksBoxName } from 'src/library/works/types';
import { Works } from 'types/techstackTypes';
import { scrollToSection } from 'utils/utils';

interface Props {
    boxItem: Works;
    isSmallScreen: boolean;
    isDarkTheme: boolean;
}

export default function BoxTech({
    isDarkTheme,
    isSmallScreen,
    boxItem,
}: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.TECH}
            dark={isDarkTheme}
            onClick={() => scrollToSection(WorksBoxName.TECH, isSmallScreen)}
        >
            <TechsWrapper>
                <ItemWrapper>
                    <ReduxIcon />
                </ItemWrapper>
            </TechsWrapper>
            <LabelWrapper>{boxItem.label}</LabelWrapper>
        </BoxContainer>
    );
}

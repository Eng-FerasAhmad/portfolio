import { ReactElement } from 'react';
import FigmaIcon from 'src/library/icon/figma/FigmaIcon';
import {
    LabelWrapper,
    ItemWrapper,
    TechsWrapper,
    BoxContainer,
} from 'src/library/works/styles';
import { WorksBox, WorksBoxName } from 'src/library/works/types';
import { Works } from 'types/techstackTypes';
import { scrollToSection } from 'utils/utils';

interface Props {
    boxItem: Works;
    isSmallScreen: boolean;
    isDarkTheme: boolean;
}

export default function BoxDesign({
    isDarkTheme,
    isSmallScreen,
    boxItem,
}: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.DESIGN}
            dark={isDarkTheme}
            onClick={() => scrollToSection(WorksBoxName.DESIGN, isSmallScreen)}
        >
            <TechsWrapper>
                <ItemWrapper>
                    <FigmaIcon />
                </ItemWrapper>
            </TechsWrapper>
            <LabelWrapper>{boxItem.label}</LabelWrapper>
        </BoxContainer>
    );
}

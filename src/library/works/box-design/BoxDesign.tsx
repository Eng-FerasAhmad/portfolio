import { ReactElement } from 'react';
import FigmaIcon from 'src/library/icon/figma/FigmaIcon';
import {
    LabelWrapper,
    ItemWrapper,
    TechsWrapper,
    BoxContainer,
} from 'src/library/works/styles';
import { WorksBox } from 'src/library/works/types';
import { Works } from 'types/techstackTypes';
import { scrollToSection } from 'utils/utils';

interface Props {
    boxItem: Works;
    isDarkTheme: boolean;
}

export default function BoxDesign({
    isDarkTheme,
    boxItem,
}: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.DESIGN}
            dark={isDarkTheme}
            onClick={() => scrollToSection('design')}
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

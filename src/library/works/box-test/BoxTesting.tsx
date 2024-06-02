import { ReactElement } from 'react';
import JestIcon from 'src/library/icon/jest/JestIcon';
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

export default function BoxTesting({
    isDarkTheme,
    isSmallScreen,
    boxItem,
}: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.TEST}
            dark={isDarkTheme}
            onClick={() => scrollToSection(WorksBoxName.TEST, isSmallScreen)}
        >
            <TechsWrapper>
                <ItemWrapper>
                    <JestIcon />
                </ItemWrapper>
            </TechsWrapper>
            <LabelWrapper>{boxItem.label}</LabelWrapper>
        </BoxContainer>
    );
}

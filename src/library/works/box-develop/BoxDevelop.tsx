import { ReactElement } from 'react';
import ReactIcon from 'src/library/icon/react/ReactIcon';

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
    isDarkTheme: boolean;
    isSmallScreen: boolean;
}

export default function BoxDevelop({
    isDarkTheme,
    isSmallScreen,
    boxItem,
}: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.DEVELOP}
            dark={isDarkTheme}
            onClick={() => scrollToSection(WorksBoxName.DEVELOP, isSmallScreen)}
        >
            <TechsWrapper>
                <ItemWrapper>
                    <ReactIcon />
                </ItemWrapper>
            </TechsWrapper>
            <LabelWrapper>{boxItem.label}</LabelWrapper>
        </BoxContainer>
    );
}

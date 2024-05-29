import { ReactElement } from 'react';
import ReactIcon from 'src/library/icon/react/ReactIcon';

import {
    BoxContainer,
    ItemWrapper,
    LabelWrapper,
    TechsWrapper,
} from 'src/library/works/styles';
import { WorksBox } from 'src/library/works/types';
import { Works } from 'types/techstackTypes';
import { scrollToSection } from 'utils/utils';

interface Props {
    boxItem: Works;
    isDarkTheme: boolean;
}

export default function BoxDevelop({
    isDarkTheme,
    boxItem,
}: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.DEVELOP}
            dark={isDarkTheme}
            onClick={() => scrollToSection('developer')}
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

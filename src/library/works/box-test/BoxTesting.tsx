import { ReactElement } from 'react';
import JestIcon from 'src/library/icon/jest/JestIcon';
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

export default function BoxTesting({
    isDarkTheme,
    boxItem,
}: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.TEST}
            dark={isDarkTheme}
            onClick={() => scrollToSection('testing')}
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

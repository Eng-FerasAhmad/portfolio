import { ReactElement } from 'react';
import ReduxIcon from 'src/library/icon/redux/ReduxIcon';
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

export default function BoxTech({ isDarkTheme, boxItem }: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.TECH}
            dark={isDarkTheme}
            onClick={() => scrollToSection('tech')}
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

import { ReactElement } from 'react';
import ViteIcon from 'src/library/icon/vite/ViteIcon';
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

export default function BoxBuild({
    isDarkTheme,
    isSmallScreen,
    boxItem,
}: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.BUILD}
            dark={isDarkTheme}
            onClick={() => scrollToSection(WorksBoxName.BUILD, isSmallScreen)}
        >
            <TechsWrapper>
                <ItemWrapper>
                    <ViteIcon />
                </ItemWrapper>
            </TechsWrapper>
            <LabelWrapper>{boxItem.label}</LabelWrapper>
        </BoxContainer>
    );
}

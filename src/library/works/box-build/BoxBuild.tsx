import { ReactElement } from 'react';
import ViteIcon from 'src/library/icon/vite/ViteIcon';
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

export default function BoxBuild({
    isDarkTheme,
    boxItem,
}: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.BUILD}
            dark={isDarkTheme}
            onClick={() => scrollToSection('build')}
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

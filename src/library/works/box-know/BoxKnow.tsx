import { ReactElement } from 'react';
import NodeIcon from 'src/library/icon/node/NodeIcon';
import {
    ItemWrapper,
    LabelWrapper,
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

export default function BoxKnow({ isDarkTheme, boxItem }: Props): ReactElement {
    return (
        <BoxContainer
            box={WorksBox.KNOW}
            dark={isDarkTheme}
            onClick={() => scrollToSection('know')}
        >
            <TechsWrapper>
                <ItemWrapper>
                    <NodeIcon />
                </ItemWrapper>
            </TechsWrapper>
            <LabelWrapper>{boxItem.label}</LabelWrapper>
        </BoxContainer>
    );
}

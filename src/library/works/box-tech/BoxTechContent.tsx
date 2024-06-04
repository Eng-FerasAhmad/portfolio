import { ReactElement } from 'react';
import ScrollButton from 'src/library/scroll-button/ScrollButton';
import BoxSkills from 'src/library/works/box-design/BoxSkills';
import {
    BoxContentContainer,
    BoxDescriptionWrapper,
    BoxTitleWrapper,
} from 'src/library/works/styles';
import { WorksBox, WorksBoxName } from 'src/library/works/types';
import { Works } from 'types/techstackTypes';

interface Props {
    works: Works;
    isDarkTheme: boolean;
}

export default function BoxTechContent({
    works,
    isDarkTheme,
}: Props): ReactElement {
    return (
        <BoxContentContainer
            box={WorksBox.TECH}
            dark={isDarkTheme}
            id={WorksBoxName.TECH}
        >
            <BoxTitleWrapper>{works.title}</BoxTitleWrapper>
            <BoxDescriptionWrapper>{works.description}</BoxDescriptionWrapper>
            <BoxSkills icons={works.icons} />
            <ScrollButton />
        </BoxContentContainer>
    );
}

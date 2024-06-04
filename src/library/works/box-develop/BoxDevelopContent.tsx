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

export default function BoxDevelopContent({
    works,
    isDarkTheme,
}: Props): ReactElement {
    return (
        <BoxContentContainer
            box={WorksBox.DEVELOP}
            dark={isDarkTheme}
            id={WorksBoxName.DEVELOP}
        >
            <BoxTitleWrapper>{works.title}</BoxTitleWrapper>
            <BoxDescriptionWrapper>{works.description}</BoxDescriptionWrapper>
            <BoxSkills icons={works.icons} />
            <ScrollButton />
        </BoxContentContainer>
    );
}

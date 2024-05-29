import { ReactElement } from 'react';
import ScrollButton from 'src/library/scroll-button/ScrollButton';
import BoxSkills from 'src/library/works/box-design/BoxSkills';
import {
    BoxContentContainer,
    BoxDescriptionWrapper,
    BoxTitleWrapper,
} from 'src/library/works/styles';
import { WorksBox } from 'src/library/works/types';
import { Works } from 'types/techstackTypes';

interface Props {
    works: Works;
}

export default function BoxDesignContent({ works }: Props): ReactElement {
    return (
        <BoxContentContainer box={WorksBox.DESIGN} dark={false} id="design">
            <BoxTitleWrapper>{works.title}</BoxTitleWrapper>
            <BoxDescriptionWrapper>{works.description}</BoxDescriptionWrapper>
            <BoxSkills icons={works.icons} />
            <ScrollButton />
        </BoxContentContainer>
    );
}

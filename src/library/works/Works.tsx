import { ReactElement } from 'react';
import BoxBuild from 'src/library/works/box-build/BoxBuild';
import BoxDesign from 'src/library/works/box-design/BoxDesign';
import BoxDevelop from 'src/library/works/box-develop/BoxDevelop';
import BoxKnow from 'src/library/works/box-know/BoxKnow';
import BoxTech from 'src/library/works/box-tech/BoxTech';
import BoxTesting from 'src/library/works/box-test/BoxTesting';
import {
    ContentWrapper,
    TitleWrapper,
    WorksContainer,
} from 'src/library/works/styles';

interface Props {
    title: string;
}

export default function Works({ title }: Props): ReactElement {
    return (
        <WorksContainer>
            <TitleWrapper>{title}</TitleWrapper>
            <ContentWrapper>
                <BoxDevelop />
                <BoxDesign />
                <BoxBuild />
                <BoxTesting />
                <BoxTech />
                <BoxKnow />
            </ContentWrapper>
        </WorksContainer>
    );
}

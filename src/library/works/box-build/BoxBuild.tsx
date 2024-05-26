import { ReactElement } from 'react';
import {
    BoxBuildContainer,
    LabelWrapper,
} from 'src/library/works/box-build/styles';

export default function BoxBuild(): ReactElement {
    return (
        <BoxBuildContainer>
            <LabelWrapper>Build</LabelWrapper>
        </BoxBuildContainer>
    );
}

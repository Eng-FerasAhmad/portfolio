import { ReactElement } from 'react';
import {
    BoxBuildContainer,
    LabelWrapper,
} from 'src/library/works/box-build/styles';

export default function BoxTesting(): ReactElement {
    return (
        <BoxBuildContainer>
            <LabelWrapper>Test</LabelWrapper>
        </BoxBuildContainer>
    );
}

import { ReactElement } from 'react';
import MaterialIcon from 'src/library/icon/material/MaterialIcon';
import ReactIcon from 'src/library/icon/react/ReactIcon';
import ReduxIcon from 'src/library/icon/redux/ReduxIcon';
import TypescriptIcon from 'src/library/icon/typescript/TypescriptIcon';
import {
    BoxBuildContainer,
    LabelWrapper,
    TechsWrapper,
} from 'src/library/works/box-build/styles';

export default function BoxDevelop(): ReactElement {
    const iconsSize = 35;

    return (
        <BoxBuildContainer>
            <TechsWrapper>
                <ReactIcon iconWidth={iconsSize} iconHeight={iconsSize} />
                <TypescriptIcon iconWidth={iconsSize} iconHeight={iconsSize} />
                <ReduxIcon iconWidth={iconsSize} iconHeight={iconsSize} />
                <MaterialIcon iconWidth={iconsSize} iconHeight={iconsSize} />
                <MaterialIcon iconWidth={iconsSize} iconHeight={iconsSize} />
            </TechsWrapper>
            <LabelWrapper>Develop</LabelWrapper>
        </BoxBuildContainer>
    );
}

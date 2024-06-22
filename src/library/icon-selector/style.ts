import styled from 'styled-components';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

interface Props {
    width?: number;
    height?: number;
}

export const IconSelectorContainer = styled.div`
    width: fit-content;
    margin: auto;
`;

export const IconTemplateContainer = styled.svg<Props>`
    @media ${device.mobile} {
        width: ${pixelToRem(35)};
        height: ${pixelToRem(35)};
    }

    @media ${device.mobile} {
        width: ${(props) =>
            props.width ? pixelToRem(props.width) : pixelToRem(40)};
        height: ${(props) =>
            props.height ? pixelToRem(props.height) : pixelToRem(40)};
    }

    @media ${device.desktop} {
        width: ${(props) =>
            props.width ? pixelToRem(props.width) : pixelToRem(50)};
        height: ${(props) =>
            props.height ? pixelToRem(props.height) : pixelToRem(50)};
    }
`;

import styled from 'styled-components';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

interface Props {
    iconWidth?: number;
    iconHeight?: number;
}

export const IconSelectorContainer = styled.div`
    width: fit-content;
    margin: auto;
`;

export const SvgTechContainer = styled.svg<Props>`
    @media ${device.mobile} {
        width: ${pixelToRem(35)};
        height: ${pixelToRem(35)};
    }
    @media ${device.tablet} {
        width: ${(props) =>
            props.iconWidth ? pixelToRem(props.iconWidth) : pixelToRem(50)};
        height: ${(props) =>
            props.iconHeight ? pixelToRem(props.iconHeight) : pixelToRem(50)};
    }
`;

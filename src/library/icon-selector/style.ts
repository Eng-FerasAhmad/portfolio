import styled from 'styled-components';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const IconSelectorContainer = styled.div`
    width: fit-content;
    margin: auto;
`;

export const SvgTechContainer = styled.svg`
    @media ${device.mobile} {
        width: ${pixelToRem(35)};
        height: ${pixelToRem(35)};
    }
    @media ${device.tablet} {
        width: ${pixelToRem(50)};
        height: ${pixelToRem(50)};
    }
`;

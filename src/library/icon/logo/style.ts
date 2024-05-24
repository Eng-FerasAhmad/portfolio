import styled from 'styled-components';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const SvgContainer = styled.svg`
    @media ${device.mobile} {
        width: ${pixelToRem(34)};
        height: ${pixelToRem(34)};
        margin-left: ${pixelToRem(1)};
    }
    @media ${device.tablet} {
        width: ${pixelToRem(45)};
        height: ${pixelToRem(45)};
    }
`;

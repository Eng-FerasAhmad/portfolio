import styled from 'styled-components';
import { device } from '../../../style/screenSize';
import { pixelToRem } from '../../../utils/utils';

export const SvgContainer = styled.svg`
    @media ${device.mobile} {
        width: ${pixelToRem(24)};
        height: ${pixelToRem(24)};
    }
    @media ${device.tablet} {
        width: ${pixelToRem(30)};
        height: ${pixelToRem(30)};
    }
`;

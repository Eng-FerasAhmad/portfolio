import styled from 'styled-components';
import { device } from '../../../style/screenSize';
import { pixelToRem } from '../../../utils/utils';

export const SvgMastersContainer = styled.svg`
    @media ${device.mobile} {
        width: ${pixelToRem(60)};
        height: ${pixelToRem(35)};
    }
    @media ${device.tablet} {
        width: ${pixelToRem(80)};
        height: ${pixelToRem(50)};
    }
`;

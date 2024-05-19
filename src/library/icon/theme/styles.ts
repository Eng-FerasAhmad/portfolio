import styled from 'styled-components';
import { device } from '../../../style/screenSize';
import { pixelToRem } from '../../../utils/utils';

export const ThemeIconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    @media ${device.mobile} {
        height: ${pixelToRem(40)};
        width: ${pixelToRem(40)};
    }

    @media ${device.tablet} {
        height: ${pixelToRem(50)};
        width: ${pixelToRem(50)};
    }
`;

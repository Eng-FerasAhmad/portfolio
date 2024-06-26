import styled from 'styled-components';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const ThemeIconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    @media ${device.mobile} {
        margin-top: ${pixelToRem(10)};
    }

    @media ${device.tablet} {
        margin: 0;
        height: ${pixelToRem(50)};
        width: ${pixelToRem(50)};
    }
`;

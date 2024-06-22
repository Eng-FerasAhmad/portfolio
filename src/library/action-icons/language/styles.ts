import styled from 'styled-components';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const LanguageIconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    @media ${device.mobile} {
        margin-top: ${pixelToRem(10)};
        height: ${pixelToRem(24)};
        width: ${pixelToRem(24)};
    }

    @media ${device.tablet} {
        margin: 0;
        height: ${pixelToRem(28)};
        width: ${pixelToRem(28)};
    }
`;

import { styled } from 'styled-components';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const BlogComingSoonContainer = styled.div`
    width: 100%;
    height: 100%;

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
        margin: ${pixelToRem(20)} auto;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(28)};
        margin: ${pixelToRem(20)};
    }
`;

export const TitleWrapper = styled.h3`
    font-weight: 600;
    margin: 20 ${pixelToRem(20)} auto;
`;

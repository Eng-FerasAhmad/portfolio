import { styled } from 'styled-components';
import { contentWidth, device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const LandingContainer = styled.div`
    color: ${(props) => props.theme.color.page.font};

    @media ${device.mobile} {
        max-width: 100%;
        padding: ${pixelToRem(0, 20)};
    }

    @media ${device.tablet} {
        max-width: ${pixelToRem(contentWidth.tablet)};
        padding: ${pixelToRem(0, 40)};
        margin: auto;
    }

    @media ${device.desktop} {
        max-width: ${pixelToRem(contentWidth.desktop)};
        padding: ${pixelToRem(0)};
    }
`;

export const LandingWrapper = styled.div`
    height: 100%;
    text-align: center;
`;

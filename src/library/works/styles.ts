import { styled } from 'styled-components';
import { color } from 'style/color';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const WorksContainer = styled.div`
    width: fit-content;
    margin: auto;
`;

export const ContentWrapper = styled.div`
    width: fit-content;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    width: fit-content;
    padding-bottom: ${pixelToRem(8)};
    margin: ${pixelToRem(20)} auto;
    border-bottom: ${pixelToRem(3)} solid ${color.green};

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.normalMobileText)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.normalText)};
    }
`;

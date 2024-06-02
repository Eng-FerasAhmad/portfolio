import styled from 'styled-components';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const DeveloperContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.normalMobileText)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.normalText)};
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImageContainer = styled.div`
    flex-shrink: 0;
    margin: ${pixelToRem(20)} auto;
`;

export const ProfileWrapper = styled.img`
    border-radius: 50%;
    box-shadow: rgb(251 131 131) 0 2px 100px -22px;

    @media ${device.mobile} {
        width: ${pixelToRem(180)};
        height: ${pixelToRem(180)};
    }

    @media ${device.tablet} {
        width: ${pixelToRem(265)};
        height: ${pixelToRem(265)};
    }
`;

export const DescriptionContainer = styled.div`
    white-space: pre-line;
    text-align: center;
    line-height: ${pixelToRem(32)};

    @media ${device.mobile} {
        width: fit-content;
        margin: ${pixelToRem(0, 10)};
    }
`;

export const NameWrapper = styled.h1`
    margin: ${pixelToRem(20, 0)};
    font-weight: 500;

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.titleMobileText)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.titleText)};
    }
`;

export const AboutWrapper = styled.div`
    line-height: 1.5;

    @media ${device.mobile} {
        margin-bottom: ${pixelToRem(20)};
        font-size: ${pixelToRem(fontSize.descriptionMobileText)};
    }

    @media ${device.tablet} {
        margin-bottom: ${pixelToRem(20)};
        font-size: ${pixelToRem(fontSize.normalSmallerText)};
    }
`;

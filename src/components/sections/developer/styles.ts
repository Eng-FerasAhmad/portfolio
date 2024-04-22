import styled from 'styled-components';
import { device } from '../../../style/screenSize';
import { pixelToRem } from '../../../utils/utils';

export const DeveloperContainer = styled.div`
    font-size: ${pixelToRem(24)};
    display: flex;
    justify-content: center;

    @media ${device.mobile} {
        min-height: calc(100vh - ${pixelToRem(110)});
    }

    @media ${device.tablet} {
        min-height: calc(100vh - ${pixelToRem(180)});
    }

    @media ${device.desktop} {
        min-height: calc(100vh - ${pixelToRem(180)});
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImageContainer = styled.div`
    flex-shrink: 0;
    margin: ${pixelToRem(20)} auto;
    background-image: 'url(profile.jpg)';
`;

export const ProfileWrapper = styled.img`
    width: ${pixelToRem(265)};
    height: ${pixelToRem(265)};
    border-radius: 50%;
`;

export const DescriptionContainer = styled.div`
    white-space: pre-line;
    text-align: center;
    line-height: ${pixelToRem(32)};

    @media ${device.mobile} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: fit-content;
    }

    @media ${device.desktop} {
        width: fit-content;
    }
`;

export const NameWrapper = styled.div`
    margin: ${pixelToRem(20, 0)};
    font-weight: 500;

    @media ${device.mobile} {
        font-size: ${pixelToRem(35)};
        line-height: 1;
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(55)};
        line-height: 2;
    }
`;

export const AboutWrapper = styled.div`
    line-height: 1.5;

    @media ${device.mobile} {
        font-size: ${pixelToRem(24)};
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(32)};
    }
`;

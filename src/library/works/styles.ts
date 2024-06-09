import { styled } from 'styled-components';
import { WorksBox, WorksProps } from 'src/library/works/types';
import { color, colorWorks } from 'style/color';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

interface Props {
    box: WorksBox;
    dark: boolean;
}

const radiusTopLeft = '6% 50% 50% 50% / 6% 50% 50% 50%';
const radiusTopRight = '50% 6% 50% 50% / 50% 6% 50% 50%';
const radiusBottomLeft = '50% 50% 50% 6% / 50% 50% 50% 6%';
const radiusBottomRight = '50% 50% 6% 50% / 50% 50% 6% 50%';
const radiusCircle = '50%';

export const getRadiusMobile = (props: Props): string => {
    switch (props.box) {
        case WorksBox.BUILD:
            return radiusCircle;
        case WorksBox.DESIGN:
            return radiusTopLeft;
        case WorksBox.DEVELOP:
            return radiusTopRight;
        case WorksBox.KNOW:
            return radiusBottomLeft;
        case WorksBox.TECH:
            return radiusBottomRight;
        case WorksBox.TEST:
            return radiusCircle;
        default:
            return radiusCircle;
    }
};

export const getRadiusTablet = (props: Props): string => {
    switch (props.box) {
        case WorksBox.BUILD:
            return radiusCircle;
        case WorksBox.DESIGN:
            return radiusTopLeft;
        case WorksBox.DEVELOP:
            return radiusTopRight;
        case WorksBox.KNOW:
            return radiusBottomLeft;
        case WorksBox.TECH:
            return radiusBottomRight;
        case WorksBox.TEST:
            return radiusCircle;
        default:
            return radiusCircle;
    }
};

export const getRadiusDesktop = (props: Props): string => {
    switch (props.box) {
        case WorksBox.BUILD:
            return radiusTopLeft;
        case WorksBox.DESIGN:
            return radiusCircle;
        case WorksBox.DEVELOP:
            return radiusTopRight;
        case WorksBox.KNOW:
            return radiusBottomLeft;
        case WorksBox.TECH:
            return radiusCircle;
        case WorksBox.TEST:
            return radiusBottomRight;
        default:
            return radiusCircle;
    }
};

export const getBgColor = (props: Props): string => {
    switch (props.box) {
        case WorksBox.BUILD:
            return colorWorks.build;
        case WorksBox.DESIGN:
            return colorWorks.design;
        case WorksBox.DEVELOP:
            return colorWorks.develop;
        case WorksBox.KNOW:
            return colorWorks.know;
        case WorksBox.TECH:
            return colorWorks.tech;
        case WorksBox.TEST:
            return colorWorks.test;
        default:
            return color.light;
    }
};

export const getBgHoverColor = (props: Props): string => {
    switch (props.box) {
        case WorksBox.BUILD:
            return colorWorks.buildLight;
        case WorksBox.DESIGN:
            return colorWorks.designLight;
        case WorksBox.DEVELOP:
            return colorWorks.developLight;
        case WorksBox.KNOW:
            return colorWorks.knowLight;
        case WorksBox.TECH:
            return colorWorks.techLight;
        case WorksBox.TEST:
            return colorWorks.testLight;
        default:
            return color.light;
    }
};

export const WorksContainer = styled.div`
    width: fit-content;
    box-sizing: border-box;
    margin: auto;

    @media ${device.mobile} {
        padding-top: ${pixelToRem(20)};
        height: 100vh;
    }

    @media ${device.tablet} {
        padding-top: ${pixelToRem(100)};
        height: 100vh;
    }

    @media ${device.desktop} {
        padding-top: ${pixelToRem(100)};
    }
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
    font-family: 'Indie Flower', cursive;
    font-weight: 400;
    font-style: normal;

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.normalMobileText)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.normalText)};
    }
`;

// items:
export const BoxContainer = styled.div<WorksProps>`
    margin: ${pixelToRem(20)};
    cursor: pointer;
    box-sizing: border-box;
    border-color: ${getBgColor};
    border-style: solid;
    border-width: ${pixelToRem(3)};
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: all 0.6s cubic-bezier(0, 0, 0.5, 1);
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    &:hover {
        transform: scale3d(1.01, 1.01, 1.01);
        box-shadow: ${getBgHoverColor} 0 2px 100px -22px;
    }

    &:visited {
        text-decoration: none;
    }

    @keyframes fade-in {
        0% {
            transform: translateY(20vh);
            opacity: 0;
        }
    }

    @media ${device.mobile} {
        width: ${pixelToRem(130)};
        height: ${pixelToRem(130)};
        border-radius: ${getRadiusMobile};
    }

    @media ${device.tablet800} {
        width: ${pixelToRem(200)};
        height: ${pixelToRem(200)};
        border-radius: ${getRadiusTablet};
    }

    @media ${device.tablet} {
        width: ${pixelToRem(200)};
        height: ${pixelToRem(200)};
        border-radius: ${getRadiusDesktop};
    }

    @media ${device.desktop} {
        width: ${pixelToRem(230)};
        height: ${pixelToRem(230)};
        border-radius: ${getRadiusDesktop};
    }
`;

export const BoxContentContainer = styled.div<Props>`
    text-decoration: none;
    color: ${(props) => props.theme.color.page.font};
    background-color: ${(props) => (props.dark ? '' : getBgColor)};
    height: fit-content;
    border-radius: ${pixelToRem(20)};

    @media ${device.mobile} {
        border-radius: 0;
        padding: 25px;
        border-bottom: ${pixelToRem(2)} solid ${getBgColor};
    }

    @media ${device.tablet} {
        margin: ${pixelToRem(90, 70, 30)};
        border-radius: ${pixelToRem(20)};
        padding: ${pixelToRem(30)};
        font-size: ${pixelToRem(24)};
        line-height: ${pixelToRem(40)};
        border-style: solid;
        border-width: ${pixelToRem(2)};
        border-color: ${getBgColor};
    }

    transition: all 0.9s cubic-bezier(0, 0, 0.5, 1);
    animation-name: fade-in;

    &:hover {
        transform: scale3d(1.03, 1.03, 1.03);
    }
`;

export const LabelWrapper = styled.div`
    margin: 0;
    height: ${pixelToRem(50)};
    padding: ${pixelToRem(4, 12, 16)};
    box-sizing: border-box;
    color: ${(props) => props.theme.color.page.font};
    font-family: 'Indie Flower', cursive;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(22)};
    }
`;

export const TechsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const ItemWrapper = styled.div`
    margin: ${pixelToRem(10)};
`;

export const BoxTitleWrapper = styled.h2`
    font-family: 'Indie Flower', cursive;
    height: ${pixelToRem(40)};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 700 !important;

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(28)};
    }
`;

export const BoxDescriptionWrapper = styled.div`
    margin: auto;

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
        padding: ${pixelToRem(0, 25)};
        line-height: ${pixelToRem(35)};
        hyphens: auto;
        text-align: justify;
    }

    @media ${device.tablet} {
        hyphens: none;
        text-align: center;
        font-size: ${pixelToRem(24)};
    }
`;

export const BoxSkillsContainer = styled.div`
    margin: ${pixelToRem(30)} auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

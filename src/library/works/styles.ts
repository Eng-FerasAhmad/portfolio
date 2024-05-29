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
        padding-top: 30px;
        height: 100vh;
    }

    @media ${device.tablet} {
        padding-top: 100px;
        height: 100vh;
    }

    @media ${device.desktop} {
        padding-top: 100px;
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
    margin: 20px;
    cursor: pointer;
    box-sizing: border-box;
    border-color: ${(props) => (props.dark ? getBgColor : getBgColor)};
    border-style: ${(props) => (props.dark ? 'solid' : 'solid')};
    border-width: ${(props) => (props.dark ? 1 : '3px')};
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

    @keyframes fade-in {
        0% {
            transform: translateY(20vh);
            opacity: 0;
        }
    }

    @media ${device.mobile} {
        width: 110px;
        height: 110px;
        border-radius: ${getRadiusMobile};
    }

    @media ${device.tablet} {
        width: 200px;
        height: 200px;
        border-radius: ${getRadiusTablet};
    }

    @media ${device.desktop} {
        width: 230px;
        height: 230px;
        border-radius: ${getRadiusDesktop};
    }
`;

export const BoxContentContainer = styled.div<Props>`
    color: ${color.dark};
    background-color: ${getBgColor};
    height: fit-content;
    padding: 30px;
    border-radius: 20px;

    @media ${device.mobile} {
        margin: 90px 0 20px;
        border-radius: 0;
        padding: 20px;
    }

    @media ${device.tablet} {
        margin: 90px 40px 40px;
        border-radius: 20px;
        padding: 30px;
        font-size: 24px;
        line-height: 40px;
    }

    transition: all 0.9s cubic-bezier(0, 0, 0.5, 1);
    animation-name: fade-in;

    &:hover {
        transform: scale3d(1.03, 1.03, 1.03);
    }
`;

export const LabelWrapper = styled.div`
    margin: 0;
    height: 50px;
    padding: 4px 12px 16px;
    box-sizing: border-box;
    color: ${(props) => props.theme.color.page.font};
    font-family: 'Indie Flower', cursive;
    font-weight: 600;
    font-style: normal;

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
    margin: 10px;
`;

export const BoxTitleWrapper = styled.h2`
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media ${device.mobile} {
        font-size: ${18};
    }

    @media ${device.tablet} {
        font-size: ${28};
    }
`;

export const BoxDescriptionWrapper = styled.div`
    margin: auto;

    @media ${device.mobile} {
        font-size: 18px;
        padding: 0 25px;
        line-height: 35px;
        hyphens: auto;
        text-align: justify;
    }

    @media ${device.tablet} {
        hyphens: none;
        text-align: center;
        font-size: 24px;
    }
`;

export const BoxSkillsContainer = styled.div`
    margin: 30px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

import styled from 'styled-components';
import { color } from 'style/color';
import { device } from 'style/screenSize';

interface Props {
    isDark: boolean;
}

export const SvgContainer = styled.div`
    width: fit-content;
    margin: 10px auto;

    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes scale {
        0%,
        100% {
            transform: none;
        }

        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
    }

    @keyframes fill {
        100% {
            box-shadow: inset 0px 0px 0px 30px #5ed4a5;
        }
    }
`;

export const Checkmark = styled.svg`
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: ${color.green};
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px #${color.green};
    animation:
        fill 0.4s ease-in-out 0.4s forwards,
        scale 0.3s ease-in-out 0.9s both;
    position: relative;
    top: 5px;
    right: 5px;
    margin: 0 auto;

    @media ${device.mobile} {
        width: 35px;
        height: 35px;
    }

    @media ${device.tablet} {
        width: 45px;
        height: 45px;
    }

    @media ${device.desktop} {
        width: 55px;
        height: 55px;
    }
`;

export const Circle = styled.circle<Props>`
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: ${color.green};
    fill: ${(props) => (props.isDark ? color.dark : color.light)};
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`;

export const Check = styled.path`
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`;

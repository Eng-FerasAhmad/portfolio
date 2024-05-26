import { styled } from 'styled-components';
import { color } from 'style/color';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

interface Props {
    border: boolean;
    colorSection: string;
}

export const NavigationContainer = styled.div`
    @media ${device.mobile} {
        visibility: hidden;
        content: none;
        margin: 0;
        width: 0;
        height: 0;
    }

    @media ${device.tablet} {
        display: none;
        visibility: hidden;
        content: none;
        margin: 0;
        width: 0;
        height: 0;
    }

    @media ${device.desktop} {
        visibility: visible;
        width: fit-content;
        height: 35px;
        padding-left: 90px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

export const ItemWrapper = styled.div<Props>`
    color: ${(props) => props.theme.color.page.font};
    border-bottom: ${(props) => (props.border ? pixelToRem(2) : 0)} solid
        ${(props) => props.colorSection};
    width: fit-content;
    margin: auto;
    height: fit-content;
    padding: ${pixelToRem(0, 15)};
    font-size: ${pixelToRem(fontSize.iconLabel)};

    @media ${device.mobile} {
        margin: ${pixelToRem(20)} auto;
        font-size: ${pixelToRem(fontSize.base)};
    }

    @media ${device.tablet} {
        margin-top: ${pixelToRem(5)};
        font-size: ${pixelToRem(fontSize.iconLabel)};
    }

    @media ${device.desktop} {
        margin-top: 0;
        font-size: ${pixelToRem(fontSize.iconLabel)};
    }

    display: inline-block;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        top: 32px;
        background-color: ${color.gray};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    &:hover {
        cursor: pointer;
    }
`;

// Tablet view:
export const MenuTabletContainer = styled.div`
    color: ${(props) => props.theme.color.page.font};

    @media ${device.mobile} {
        visibility: hidden;
        content: none;
        margin: 0;
        width: 0;
        height: 0;
    }

    @media ${device.tablet} {
        width: fit-content;
        height: fit-content;
        margin: ${pixelToRem(10)} auto 0 auto;
        display: block;
        visibility: visible;
    }

    @media ${device.desktop} {
        visibility: hidden;
        content: none;
        margin: 0;
        width: 0;
        height: 0;
    }
`;
export const TabletWrapper = styled.div`
    width: fit-content;
    margin: auto;

    @media ${device.mobile} {
        padding-left: 0;
    }

    @media ${device.tablet} {
        padding-left: ${pixelToRem(80)};
    }
`;

export const TabletNavigationWrapper = styled.div`
    position: absolute;
    top: ${pixelToRem(60)};
    left: 0;
    width: calc(100vw - 2px);
    height: calc(100vh - 2px);
    padding-left: ${pixelToRem(0)};
    background: ${(props) => props.theme.color.page.backgroundImage};
    z-index: 10;
`;

export const TabletContentWrapper = styled.div`
    width: fit-content;
    margin: auto;
    padding-top: ${pixelToRem(10)};
    display: flex;
    flex-direction: column;
`;

// Mobile view:
export const MenuMobileContainer = styled.div`
    color: ${(props) => props.theme.color.page.font};

    @media ${device.mobile} {
        display: block;
        width: fit-content;
        margin: ${pixelToRem(0, 0, -15, -3)};
    }

    @media ${device.tablet} {
        display: none;
        width: 0;
        height: 0;
    }

    @media ${device.desktop} {
        display: none;
        content: none;
        margin: 0;
        width: 0;
        height: 0;
    }
`;

export const MobileContentWrapper = styled.div`
    width: fit-content;
    margin: auto;
    padding-top: ${pixelToRem(10)};
    display: flex;
    flex-direction: column;
`;

export const MobileNavigationWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw - 0px);
    height: calc(100vh - 0px);
    overflow: hidden;
    background: ${(props) => props.theme.color.page.backgroundImage};
    z-index: 10;
`;

export const MobileWrapper = styled.div`
    width: fit-content;
`;

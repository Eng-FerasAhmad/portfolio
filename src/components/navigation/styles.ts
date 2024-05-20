import { styled } from 'styled-components';
import { color } from 'style/color';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

interface Props {
    border: boolean;
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
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

export const ItemWrapper = styled.div<Props>`
    color: ${(props) => props.theme.color.page.font};
    border-bottom: ${(props) => (props.border ? pixelToRem(2) : 0)} solid
        ${color.yellowDark};
    width: fit-content;
    margin: auto;
    height: fit-content;
    display: block;
    padding: ${pixelToRem(0, 15)};
    font-size: ${pixelToRem(fontSize.iconLabel)};

    @media ${device.mobile} {
        margin-top: 0;
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

    &:hover {
        height: fit-content;
        border-bottom: ${pixelToRem(2)} solid
            ${(props) => props.theme.color.page.font};
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
`;

export const TabletNavigationWrapper = styled.div`
    position: absolute;
    top: ${pixelToRem(60)};
    width: ${pixelToRem(160)};
    height: ${pixelToRem(180)};
    margin-left: ${pixelToRem(-70)};
    background-color: ${(props) => props.theme.color.button.font};
    border-style: solid;
    border-width: ${pixelToRem(1)};
    border-color: ${(props) => props.theme.color.page.font};
    border-radius: ${pixelToRem(5)};
    z-index: 10;
    box-shadow: rgb(149 157 165 / 20%) 0 8px 24px;
`;

export const TabletContentWrapper = styled.div`
    width: fit-content;
    margin: auto;
    padding-top: ${pixelToRem(10)};
`;

// Mobile view:
export const MenuMobileContainer = styled.div`
    color: ${(props) => props.theme.color.page.font};

    @media ${device.mobile} {
        display: block;
        width: fit-content;
        margin: ${pixelToRem(10, 0, -15, -3)};
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

export const MobileNavigationWrapper = styled.div`
    position: absolute;
    top: ${pixelToRem(60)};
    width: ${pixelToRem(150)};
    height: ${pixelToRem(160)};
    margin-left: ${pixelToRem(40)};
    background-color: ${(props) => props.theme.color.button.font};
    border-style: solid;
    border-width: ${pixelToRem(1)};
    border-color: ${(props) => props.theme.color.page.font};
    border-radius: ${pixelToRem(5)};
    z-index: 10;
    box-shadow: rgb(149 157 165 / 20%) 0 8px 24px;
`;

export const MobileWrapper = styled.div`
    width: fit-content;
`;

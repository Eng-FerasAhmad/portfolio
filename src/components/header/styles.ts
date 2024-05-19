import styled from 'styled-components';
import { fontSize } from '../../style/common';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const HeaderContainer = styled.div`
    height: fit-content;
    line-height: ${pixelToRem(32)};
    position: fixed;
    top: 0;

    @media ${device.mobile} {
        padding: ${pixelToRem(16, 15)};
        width: fit-content;
    }

    @media ${device.tablet} {
        width: -webkit-fill-available;
        padding: ${pixelToRem(16, 40)};
        background-image: ${(props) => props.theme.color.page.backgroundImage};
    }
`;

export const NavbarWrapper = styled.div`
    width: 100%;

    @media ${device.mobile} {
        display: block;
    }

    @media ${device.tablet} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const LogoWrapper = styled.div`
    color: ${(props) => props.theme.color.page.font};
    font-family: 'Dancing Script', cursive;
    font-size: ${pixelToRem(fontSize.normalText)};
    cursor: pointer;
    display: flex;
`;

export const NavigationWrapper = styled.div`
    @media ${device.mobile} {
        display: block;
    }

    @media ${device.tablet} {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const NameWrapper = styled.div`
    margin-left: ${pixelToRem(10)};

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.tablet} {
        display: block;
    }
`;

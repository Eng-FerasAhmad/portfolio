import styled from 'styled-components';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const HeaderContainer = styled.div`
    height: ${pixelToRem(80)};

    line-height: ${pixelToRem(32)};
    position: fixed;
    top: 0;
    width: -webkit-fill-available;

    @media ${device.mobile} {
        padding: ${pixelToRem(16, 15)};
    }

    @media ${device.tablet} {
        padding: ${pixelToRem(16, 40)};
    }
`;

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const LogoWrapper = styled.div`
    color: ${(props) => props.theme.color.page.font};
    font-family: 'Dancing Script', cursive;
    font-size: ${pixelToRem(32)};
    cursor: pointer;

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.tablet} {
        display: block;
    }
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

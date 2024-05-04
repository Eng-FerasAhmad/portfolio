import styled from 'styled-components';
import { color } from '../../../style/color';
import { device } from '../../../style/screenSize';
import { pixelToRem } from '../../../utils/utils';

export const ContactContainer = styled.div`
    font-size: ${pixelToRem(26)};
    width: 80%;

    @media ${device.mobile} {
        margin: 0 auto ${pixelToRem(15)} auto;
    }
    @media ${device.tablet} {
        margin: 0 auto ${pixelToRem(30)} auto;
    }
`;

export const ContactTitleWrapper = styled.div`
    border: ${pixelToRem(3)} solid ${color.yellow};
    border-radius: ${pixelToRem(50)};
    padding: ${pixelToRem(5, 0)};

    &:hover {
        background-color: ${color.yellow};
        color: ${(props) => props.theme.color.page.fontHover};
        cursor: pointer;
    }

    @media ${device.mobile} {
        font-size: ${pixelToRem(26)};
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(43)};
    }
`;

export const ContactItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.mobile} {
        font-size: ${pixelToRem(26)};
        margin: ${pixelToRem(30, 0, 70, 0)};
        padding: 0;
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(32)};
        margin: ${pixelToRem(30, 0, 70, 0)};
        padding: ${pixelToRem(0, 50)};
    }
`;

export const SocialMediaWrapper = styled.div`
    width: fit-content;
    margin: auto;

    @media ${device.mobile} {
        font-size: ${pixelToRem(20)};
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(32)};
    }
`;

export const ItemsContainer = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;
    margin: ${pixelToRem(30, 0, 70, 0)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(26)};
        flex-direction: column;
        align-items: center;
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(32)};
        flex-direction: row;
    }
`;
export const ItemWrapper = styled.a`
    width: ${pixelToRem(200)};
    padding: ${pixelToRem(20, 0)};
    text-decoration: none;
    color: ${color.grayDarker};

    &:visited {
        color: ${color.grayDarker};
        text-decoration: none;
    }

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
    }
    @media ${device.tablet} {
        font-size: ${pixelToRem(24)};
    }

    &:hover {
        background-color: ${color.yellowLight};
        cursor: pointer;
        border-radius: 10px;
    }
`;

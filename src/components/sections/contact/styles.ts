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

export const ContactItemContainer = styled.form`
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
        font-size: ${pixelToRem(23)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(32)};
    }
`;

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: ${pixelToRem(30, 0, 70, 0)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(26)};
        flex-flow: row wrap-reverse;
        justify-content: center;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(32)};
        flex-direction: row;
        width: 100%;
    }
`;
export const ItemWrapper = styled.a`
    padding: ${pixelToRem(20, 0)};
    text-decoration: none;
    color: ${(props) => props.theme.color.page.font};

    &:visited {
        color: ${(props) => props.theme.color.page.font};
        text-decoration: none;
    }

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
        width: 50%;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(24)};
        width: ${pixelToRem(200)};
    }

    &:hover {
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 45%) 0 15px 20px -20px;
    }
`;

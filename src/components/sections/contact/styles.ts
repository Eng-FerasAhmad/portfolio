import styled from 'styled-components';
import { color } from '../../../style/color';
import { fontSize } from '../../../style/common';
import { device } from '../../../style/screenSize';
import { pixelToRem } from '../../../utils/utils';

export const ContactContainer = styled.div`
    padding: ${pixelToRem(90, 30)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.normalMobileText)};
        margin: 0 auto ${pixelToRem(15)} auto;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.normalText)};
        margin: 0 auto ${pixelToRem(30)} auto;
    }
`;

export const ContactItemContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.mobile} {
        margin: ${pixelToRem(30, 0, 70, 0)};
        padding: 0;
    }

    @media ${device.tablet} {
        margin: ${pixelToRem(30, 0, 70, 0)};
        padding: ${pixelToRem(0, 50)};
    }
`;

export const SocialMediaWrapper = styled.div`
    width: fit-content;
    margin: auto;
`;

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: ${pixelToRem(30, 0, 70, 0)};

    @media ${device.mobile} {
        flex-flow: row wrap-reverse;
        justify-content: center;
    }

    @media ${device.tablet} {
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
        font-size: ${pixelToRem(fontSize.iconMobileLabel)};
        width: 50%;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.iconLabel)};
        width: ${pixelToRem(200)};
    }

    &:hover {
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 45%) 0 15px 20px -20px;
    }
`;

export const DescriptionWrapper = styled.div`
    border-bottom: ${pixelToRem(3)} solid ${color.yellow};
    width: fit-content;
    margin: ${pixelToRem(30)} auto;
`;

export const MailSentWrapper = styled.div`
    margin: auto;
    flex-direction: row;
    color: ${(props) => props.theme.color.page.font};

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.descriptionMobileText)};
        width: fit-content;
        height: ${pixelToRem(90)};
        padding: ${pixelToRem(100, 20)};
        border: none;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(20)};
        width: ${pixelToRem(500)};
        height: ${pixelToRem(120)};
        padding: ${pixelToRem(30, 20)};
        display: flex;
        flex-direction: column;
        border: ${pixelToRem(1)} solid ${color.green};
        border-radius: ${pixelToRem(5)};
    }
`;

export const SentTextWrapper = styled.div`
    margin-left: ${pixelToRem(10)};
`;

export const FormContainer = styled.div`
    width: 100%;
    width: auto;
`;

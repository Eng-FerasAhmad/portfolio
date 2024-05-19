import { styled } from 'styled-components';
import { color } from 'style/color';
import { fontSize } from 'style/common';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/utils';

export const BoxTechstackContainer = styled.div`
    border-style: solid;
    padding: ${pixelToRem(10)};
    border-radius: ${pixelToRem(100)};
    width: ${pixelToRem(220)};
    height: fit-content;
    border-width: ${pixelToRem(1)};
    cursor: pointer;
    background-color: ${color.green};
    color: ${(props) => props.theme.color.button.font};

    @media ${device.mobile} {
        font-size: ${pixelToRem(fontSize.descriptionMobileText)};
        margin: ${pixelToRem(5)} auto;
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(fontSize.buttonTitle)};
        margin: ${pixelToRem(10)};
    }

    &:hover {
        box-shadow: rgb(149 157 165 / 20%) 0 8px 24px;
        background-color: ${color.greenDark};
        color: ${(props) => props.theme.color.button.font};
    }
`;

export const LabelWrapper = styled.span`
    width: fit-content;
`;

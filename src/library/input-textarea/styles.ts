import { styled } from 'styled-components';
import { color } from '../../style/color';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const InputTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${pixelToRem(0, 0, 30, 0)};
`;

export const InputWrapper = styled.textarea`
    font-size: ${pixelToRem(20)};
    color: ${color.grayDarker};
    margin: 0;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    display: inline-block;
    box-sizing: border-box;
    padding: ${pixelToRem(10, 30)};
    border-radius: ${pixelToRem(20)};
    height: ${pixelToRem(145)};
    min-height: ${pixelToRem(145)};
    max-height: ${pixelToRem(245)};
    border-color: ${color.gray};
    border-style: solid;
    border-width: thin;

    &:focus-visible,
    :focus-visible {
        border-color: ${color.yellow};
        border-style: solid;
        border-width: thin;
        outline: none;
    }

    &:active {
        border-color: ${color.yellow};
    }

    @media ${device.mobile} {
        padding: ${pixelToRem(10, 20)};
    }

    @media ${device.tablet} {
        padding: ${pixelToRem(10, 30)};
    }
`;

export const LabelWrapper = styled.label`
    width: fit-content;
    margin: ${pixelToRem(0, 0, 7, 30)};
    font-size: ${pixelToRem(23)};
    color: ${(props) => props.theme.color.page.font};

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(20)};
    }
`;

export const ErrorLabelWrapper = styled.label`
    color: ${color.error};
    width: fit-content;
    margin: ${pixelToRem(5, 0, 0, 30)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(12)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(14)};
    }
`;

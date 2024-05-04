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

export const InputWrapper = styled.input`
    font-size: ${pixelToRem(20)};
    color: ${color.grayDarker};
    margin: 0;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;

    border-radius: ${pixelToRem(50)};
    height: ${pixelToRem(45)};
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
        padding: ${pixelToRem(10, 5)};
    }
    @media ${device.tablet} {
        padding: ${pixelToRem(10, 30)};
    }
`;

export const LabelWrapper = styled.label`
    width: fit-content;
    margin: ${pixelToRem(0, 0, 7, 30)};
    font-size: ${pixelToRem(23)};
    color: ${color.yellow};
    font-weight: 600;
`;

import { styled } from 'styled-components';
import { color } from '../../style/color';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const ButtonContainer = styled.div`
    font-size: ${pixelToRem(23)};
    border-radius: ${pixelToRem(23)};
    border-color: ${color.yellow};
    border-style: solid;
    border-width: thin;
    color: ${(props) => props.theme.color.button.font};
    height: fit-content;
    padding: ${pixelToRem(10)};
    cursor: pointer;
    margin: 0;
    background-color: ${color.yellow};

    &:hover {
        background-color: ${color.yellowDark};
        color: ${(props) => props.theme.color.button.font};
    }

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(23)};
    }
`;

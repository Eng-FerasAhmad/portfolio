import { styled } from 'styled-components';
import { color } from '../../style/color';
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
    font-weight: 600;
    &:hover {
        background-color: ${color.yellowDark};
        color: ${(props) => props.theme.color.button.font};
    }
`;

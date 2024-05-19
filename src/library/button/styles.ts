import { styled } from 'styled-components';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

interface Props {
    color: string;
    secondaryColor: string;
}

export const ButtonContainer = styled.div<Props>`
    font-size: ${pixelToRem(23)};
    border-radius: ${pixelToRem(23)};
    border-color: ${(props) => props.color};
    border-style: solid;
    border-width: thin;
    color: ${(props) => props.theme.color.button.font};
    height: fit-content;
    padding: ${pixelToRem(10, 30)};
    cursor: pointer;
    margin: ${pixelToRem(10)};
    background-color: ${(props) => props.color};

    &:hover {
        background-color: ${(props) => props.secondaryColor};
        color: ${(props) => props.theme.color.button.font};
    }

    @media ${device.mobile} {
        font-size: ${pixelToRem(18)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(23)};
        min-width: ${pixelToRem(160)};
    }
`;

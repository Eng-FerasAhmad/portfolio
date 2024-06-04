import { styled } from 'styled-components';
import { device } from '../../style/screenSize';

export const ButtonContainer = styled.div`
    width: 33px;
    margin: auto;
    height: 33px;
    border-radius: 50%;

    @media ${device.mobile} {
        bottom: 5px;
        right: 10px;
    }

    @media ${device.tablet} {
        bottom: 10px;
        right: 40px;
    }

    border: 0 solid;
    outline-offset: 0;
    text-shadow: none;

    &:hover {
        cursor: pointer;
        box-shadow:
            inset 0 0 20px rgb(255 255 255 / 50%),
            0 0 20px rgb(255 255 255 / 20%);
        outline-color: rgb(255 255 255 / 0%);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388;
    }
`;

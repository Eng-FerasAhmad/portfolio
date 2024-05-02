import { styled } from 'styled-components';
import { device } from '../../style/screenSize';

export const ButtonContainer = styled.div`
    width: fit-content;
    margin: auto;
    height: fit-content;
    position: fixed;

    animation: fadeIn 3s;

    &:hover {
        cursor: pointer;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media ${device.mobile} {
        bottom: 5px;
        right: 10px;
    }

    @media ${device.tablet} {
        bottom: 10px;
        right: 40px;
    }
`;

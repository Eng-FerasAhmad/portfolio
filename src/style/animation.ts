import { styled } from 'styled-components';

interface Props {
    duration: number;
}

export const AnimationFadeIn = styled.div<Props>`
    width: fit-content;
    margin: auto;
    animation: fade-in ${(props) => props.duration}s;

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

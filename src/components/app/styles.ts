import { styled } from 'styled-components';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.mobile} {
        margin: ${pixelToRem(0)};
        min-height: 80vh;
        padding: 0;
        max-width: 100%;
        height: fit-content;
    }

    @media ${device.tablet} {
        margin: ${pixelToRem(0)};
        min-height: 100vh;
        max-width: 100%;
        height: 100%;
    }

    @media ${device.desktop} {
        margin: auto;
        min-height: 100vh;
    }
`;

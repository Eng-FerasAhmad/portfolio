import { styled } from 'styled-components';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const AppContainer = styled.div`
    max-width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${(props) => props.theme.color.page.backgroundImage};

    @media ${device.mobile} {
        margin: ${pixelToRem(0)};
    }

    @media ${device.tablet} {
        margin: ${pixelToRem(0)};
    }

    @media ${device.desktop} {
        margin: auto;
    }
`;

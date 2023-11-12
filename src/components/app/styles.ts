import { styled } from 'styled-components';
import { device } from '../../style/screenSize';
import { pixelToRem } from '../../utils/utils';

export const AppContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

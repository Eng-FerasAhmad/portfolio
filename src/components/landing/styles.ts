import { styled } from 'styled-components';
import { pixelToRem } from '../../utils/utils';
import { contentWidth, device } from '../../style/screenSize';

export const LandingContainer = styled.div`
  color: ${(props) => props.theme.color.page.font};
  margin: auto;

  @media ${device.mobile} {
    max-width: 100%;
    padding: ${pixelToRem(30, 40)};
  }

  @media ${device.tablet} {
    max-width: ${pixelToRem(contentWidth.tablet)};
    padding: ${pixelToRem(100, 40)};
  }

  @media ${device.desktop} {
    max-width: ${pixelToRem(contentWidth.desktop)};
    padding: ${pixelToRem(100, 0)};
  }
`;

export const LandingWrapper = styled.div`
  font-size: ${pixelToRem(55)};
  height: 100%;
  text-align: center;

  @media ${device.mobile} {
    font-size: ${pixelToRem(35)};
  }
  @media ${device.tablet} {
    font-size: ${pixelToRem(55)};
  }
`;

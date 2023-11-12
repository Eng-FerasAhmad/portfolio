import { styled } from 'styled-components';
import { pixelToRem } from '../../utils/utils';
import { contentWidth, device } from '../../style/screenSize';

export const LandingContainer = styled.div`
  color: ${(props) => props.theme.color.page.font};
  margin: auto;
  padding: ${pixelToRem(100,0)};

  @media ${device.mobile} {
    max-width: ${pixelToRem(contentWidth.mobile)};
  }

  @media ${device.tablet} {
   max-width: ${pixelToRem(contentWidth.tablet)};
  }

  @media ${device.desktop} {
    max-width: ${pixelToRem(contentWidth.desktop)};
  }
`;

export const LandingWrapper = styled.div`
  font-size: ${pixelToRem(55)};
  height: ${pixelToRem(200)};
`;

export const LandingWrapperComminSoon = styled.div`
  font-size: ${pixelToRem(35)};
  text-align: center;
  margin-top: ${pixelToRem(20)};
`;
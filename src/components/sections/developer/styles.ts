import styled from 'styled-components';
import { pixelToRem } from '../../../utils/utils';
import { device } from '../../../style/screenSize';

export const DeveloperContainer = styled.div`
  font-size: ${pixelToRem(24)};
  margin-bottom: ${pixelToRem(48)};
  height: fit-content;
  width: fit-content;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.desktop} {
    flex-direction: row;
  }
`; 

export const ImageContainer = styled.div`
  border-width: ${pixelToRem(1)};
  border-style: solid;
  border-color: ${(props) => props.theme.color.page.font};
  border-radius: 50%;
  width: ${pixelToRem(150)};
  height: ${pixelToRem(150)};

  @media ${device.mobile} {
    margin: auto;
  }

  @media ${device.tablet} {
    margin: ${pixelToRem(0, 25)};
  }

  @media ${device.desktop} {
    margin: ${pixelToRem(0, 25)};
  }
`;

export const DescriptionContainer = styled.div`
  white-space: pre-line;
  text-align: left;
  line-height:  ${pixelToRem(32)};
  width: 70%;

  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 70%;
  }

  @media ${device.desktop} {
    width: 70%;
  }
`;


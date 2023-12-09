import styled from 'styled-components';
import { pixelToRem } from '../../../utils/utils';
import { device } from '../../../style/screenSize';

export const DeveloperContainer = styled.div`
  font-size: ${pixelToRem(24)};
  margin-bottom: ${pixelToRem(48)};
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;

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
  flex-shrink: 0;  

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

  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: fit-content;
  }

  @media ${device.desktop} {
    width: fit-content;
  }
`;


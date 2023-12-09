import styled from 'styled-components';
import { pixelToRem } from '../../../utils/utils';

export const DeveloperContainer = styled.div`
  font-size: ${pixelToRem(24)};
  margin-bottom: ${pixelToRem(32)}
  height: fit-content;
`;

export const ContentContainer = styled.div`
  display: flex;
`; 


export const ImageContainer = styled.div`
  border-height: ${pixelToRem(1)};
  border-style: solid;
  border-color: ${(props) => props.theme.color.page.font};
  border-radius: 50%;
  width: ${pixelToRem(150)};
  height: ${pixelToRem(150)};
  margin: 0 ${pixelToRem(25)};
`;

export const DescriptionContainer = styled.div`
  white-space: pre-line;
  text-align: left;
  line-height:  ${pixelToRem(32)};
  width: 70%;
`;


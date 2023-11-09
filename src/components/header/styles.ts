import styled from 'styled-components';
import { pixelToRem } from '../../utils/utils';

export const HeaderContainer = styled.div`
  height: ${pixelToRem(32)};
  background: red;
  padding: ${pixelToRem(16, 40)};
  line-height: ${pixelToRem(32)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`

`;

export const NavigationWrapper = styled.div`
  
`;

import styled from 'styled-components';
import { pixelToRem } from '../../utils/utils';

export const HeaderContainer = styled.div`
  height: ${pixelToRem(80)};
  padding: ${pixelToRem(16, 40)};
  line-height: ${pixelToRem(32)};
  position: fixed;
  top: 0;
  width: -webkit-fill-available;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  color: ${(props) => props.theme.color.page.font};
  font-family: 'Dancing Script', cursive;
  font-size: ${pixelToRem(32)};
  cursor: pointer;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

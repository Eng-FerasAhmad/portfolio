import { useContext } from 'react';

import {
  HeaderContainer,
  NavbarWrapper,
  LogoWrapper,
  NavigationWrapper,
} from './styles';
import { ThemeContext } from '../../context/ThemeContext';
import ThemeIcon from '../../library/icon/theme-icon/ThemeIcon';
import GithubIcon from '../../library/icon/github-icon/GithubIcon';

export default function Header() {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer data-testid="header">
      <NavbarWrapper>
        <LogoWrapper>Feras Ahmad</LogoWrapper>
        <NavigationWrapper>
          <GithubIcon isDark={isDarkTheme!} />
          <ThemeIcon isDark={isDarkTheme!} clickHandler={() => toggleTheme()} />
        </NavigationWrapper>
      </NavbarWrapper>
    </HeaderContainer>
  );
}

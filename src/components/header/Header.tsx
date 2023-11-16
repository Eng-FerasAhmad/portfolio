import { useContext } from 'react';

import { HeaderContainer, LogoWrapper, NavigationWrapper } from './styles';
import { ThemeContext } from '../../context/ThemeContext';
import ThemeIcon from '../../library/icon/theme-icon/ThemeIcon';
import GithubIcon from '../../library/icon/github-icon/GithubIcon';

export default function Header(): JSX.Element {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer data-testid="header">
      <LogoWrapper>Feras Ahmad</LogoWrapper>
      <NavigationWrapper>
        <GithubIcon isDark={isDarkTheme!} />
        <ThemeIcon isDark={isDarkTheme!} clickHandler={() => toggleTheme()} />
      </NavigationWrapper>
    </HeaderContainer>
  );
}

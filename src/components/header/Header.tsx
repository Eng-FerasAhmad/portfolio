import { useContext } from 'react';

import { HeaderContainer, LogoWrapper, NavigationWrapper } from './styles';
import { ThemeContext } from '../../context/ThemeContext';
import ThemeIcon from '../../library/theme-toggle/ThemeToggle';

export default function Header(): JSX.Element {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer data-testid="header">
      <LogoWrapper>Feras Ahmad</LogoWrapper>
      <NavigationWrapper>
        <ThemeIcon isDark={isDarkTheme!} clickHandler={() => toggleTheme()} />
      </NavigationWrapper>
    </HeaderContainer>
  );
}

import { useContext } from 'react';

import {
  HeaderContainer,
  NavbarWrapper,
  LogoWrapper,
  NavigationWrapper,
} from './styles';
import { ThemeContext } from '../../context/ThemeContext';
import ThemeIcon from '../../library/icon/theme/ThemeIcon';
import GithubIcon from '../../library/icon/github/GithubIcon';
import LanguageIcon from '../../library/icon/language/LanguageIcon';

export default function Header() {
  const { toggleTheme, isDarkTheme, toggleLanguage } = useContext(ThemeContext);

  const clickHandler = () => {
    window.open('https://github.com/Eng-FerasAhmad', '_blank');
  };

  return (
    <HeaderContainer data-testid="header">
      <NavbarWrapper>
        <LogoWrapper onClick={clickHandler}>Feras Ahmad</LogoWrapper>
        <NavigationWrapper>
          <GithubIcon isDark={isDarkTheme!} />
          <ThemeIcon isDark={isDarkTheme!} clickHandler={() => toggleTheme()} />
          <LanguageIcon
            isDark={isDarkTheme!}
            clickHandler={() => toggleLanguage()}
          />
        </NavigationWrapper>
      </NavbarWrapper>
    </HeaderContainer>
  );
}

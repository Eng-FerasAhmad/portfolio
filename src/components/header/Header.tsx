import { useContext } from 'react';

import Button from '../../library/button/Button';
import { HeaderContainer, LogoWrapper, NavigationWrapper } from './styles';
import { ThemeContext } from '../../context/ThemeContext';

export default function Header(): JSX.Element {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer data-testid="header">
      <LogoWrapper>Header</LogoWrapper>
      <NavigationWrapper>
        <Button label="Button" clickHandler={() => toggleTheme()} />
      </NavigationWrapper>
    </HeaderContainer>
  );
}

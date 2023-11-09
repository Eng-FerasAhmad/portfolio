import { useContext } from 'react';

import Button from '../../library/button/Button';
import { HeaderContainer } from './styles';
import { ThemeContext } from '../../context/ThemeContext';

export default function Header(): JSX.Element {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer data-testid="header">
      <div>Header</div>
      <div>
        <Button label="Button" clickHandler={() => toggleTheme()} />
      </div>
    </HeaderContainer>
  );
}

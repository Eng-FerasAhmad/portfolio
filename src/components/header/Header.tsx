import { useContext } from 'react';

import Button from "../../library/button/Button";
import { HeaderContainer } from "./styles";
import { AppContext } from '../../context/AppContext';

export default function Header(): JSX.Element {
  const { toggleTheme } = useContext(AppContext);

  return (
    <HeaderContainer data-testid="header">
      <div>Header</div>
      <div>
        <Button label="Button" clickHandler={() => toggleTheme()}/>
      </div>
    </HeaderContainer>
  );
}

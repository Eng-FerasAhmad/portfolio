import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../style/global';
import Entry from '../entry/Entry';
import { AppContainer } from './styles';
import { themeDark, themeLight } from '../../style/theme';
import Button from '../../library/button/Button';

export default function App(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <AppContainer data-testid="app">
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <GlobalStyle />
        <Entry />
        <Button label="Button" clickHandler={() => setIsDark(!isDark)}/>
      </ThemeProvider>
    </AppContainer>
  );
}

import { GlobalStyle } from '../../style/global';
import Entry from '../entry/Entry';
import { AppContainer } from './styles';
import Header from '../header/Header';
import ThemeContextProvider from '../../context/ThemeContext';

export default function App(): JSX.Element {
  return (
    <AppContainer data-testid="app">
      <ThemeContextProvider>
        <GlobalStyle />
        <Header />
        <Entry />
      </ThemeContextProvider>
    </AppContainer>
  );
}
